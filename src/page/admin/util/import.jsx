import { useState, useEffect } from "react"
import Papa from "papaparse"
import axios from "axios"
import api_service from "../../../api/api_service"
import api_node from "../../../api/api_node"
import api_sqlite from "../../../api/api_sqlite"

import "../../../styles/import.css"

function ImportData() {
    const [employes, setEmployes] = useState([])
    const [salaires, setSalaires] = useState([])
    const [imagesZip, setImagesZip] = useState(null)
    
    const [employeMap, setEmployeMap] = useState({})
    const [salaireMap, setSalaireMap] = useState({})
    const [bankAccountId, setBankAccountId] = useState(null)

    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState({ current: 0, total: 0, section: '' })
    const [messages, setMessages] = useState([])

    const addMsg = (text, type = 'info') => {
        setMessages(prev => [...prev, { text, type, time: new Date().toLocaleTimeString() }])
    }

    const convertDate = (date) => {
        if (!date) return "";
        const [jour, mois, annee] = date.split("/");
        return `${annee}-${mois}-${jour}`;
    };

    function getVal(row, ...keys) {
        if (!row) return '';
        for (const k of keys) {
            const cleanK = k.replace(/[^a-z0-9]/gi, '').toLowerCase();
            const foundKey = Object.keys(row).find(rk => {
                const cleanRk = String(rk).replace(/[^a-z0-9]/gi, '').toLowerCase();
                return cleanRk === cleanK || (cleanRk.length > 3 && cleanK.includes(cleanRk)) || (cleanK.length > 3 && cleanRk.includes(cleanK));
            });
            if (foundKey && row[foundKey] !== undefined && row[foundKey] !== null) {
                return String(row[foundKey]).trim();
            }
        }
        return '';
    }

    function convertDateDolibarr(dateStr) {
        if (!dateStr) return 0
        let s = String(dateStr).replace(/["'\[\]{} ]/g, '').trim()
        const parts = s.includes('-') ? s.split('-') : s.split('/')
        if (parts.length !== 3) return 0
        let day, month, year
        if (parts[0].length === 4) {
            year = parts[0]; month = parts[1]; day = parts[2]
        } else {
            day = parts[0]; month = parts[1]; year = parts[2]
        }
        const fullYear = year.length === 2 ? '20' + year : year
        const date = new Date(`${fullYear}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00Z`)
        return Math.floor(date.getTime() / 1000)
    }

    function mapGender(genre) {
        if (!genre) return null
        const g = String(genre).toLowerCase().trim()
        if (['homme', 'h', 'male', 'man', 'm', 'garçon'].includes(g)) return 'man'
        if (['femme', 'f', 'female', 'woman', 'fille'].includes(g)) return 'woman'
        return g
    }

    function parsePaiements(str) {
        if (!str || String(str).trim() === '') return []
        const results = []
        try {
            const regex = /["']*(\d{1,4}[\/\-]\d{1,2}[\/\-]\d{1,4})["']*\s*,\s*["']*(\-?[0-9\.\,\s]+)["']*/g;
            let match;
            while ((match = regex.exec(String(str))) !== null) {
                results.push({
                    date: match[1],
                    montant: parseMontant(match[2])
                });
            }
        } catch (e) {
            console.warn('Impossible de parser le champ paiement:', str, e)
        }
        return results;
    }

    function parseMontant(val) {
        if (typeof val === 'number') return val
        if (!val) return 0
        return parseFloat(String(val).replace(/\s/g, '').replace(',', '.')) || 0
    }


    const handleEmployeFile = (e) => {
        const file = e.target.files[0]
        if (!file) return
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            transformHeader: h => h.toLowerCase().trim(),
            complete: (results) => {
                const emp = results.data.map(row => ({
                    refEmploye: getVal(row, 'ref_employe', 'refemploye', 'ref', 'identifiant_employe', 'id'),
                    nom: getVal(row, 'nom', 'name', 'employe_nom', 'firstname', 'lastname'),
                    genre: getVal(row, 'genre', 'sexe', 'gender'),
                    identifiant: getVal(row, 'identifiant', 'login', 'username', 'pseudo'),
                    mdp: getVal(row, 'mdp', 'mot_de_passe', 'password', 'pass'),
                    heureTravailSemaine: parseMontant(getVal(row, 'heure_travail_semaine', 'heure_travail', 'heures', 'heure', 'heuresemaine')),
                    poste: getVal(row, 'poste', 'job', 'fonction', 'role')
                })).filter(e => e.refEmploye && e.identifiant)
                setEmployes(emp)
                addMsg(`${emp.length} employé(s) lu(s) depuis le CSV`)
            }
        })
    }

    const sendEmployes = async () => {
        if (employes.length === 0) return addMsg('Aucun employé à importer.', 'error')
        setLoading(true)
        setProgress({ current: 0, total: employes.length, section: 'employés' })
        const newMap = {}
        let ok = 0

        let existingUsers = []
        try {
            const resp = await api_service.get('users')
            existingUsers = resp.data
        } catch (e) { }

        for (let i = 0; i < employes.length; i++) {
            const emp = employes[i]
            setProgress({ current: i + 1, total: employes.length, section: 'employés' })
            try {

                const existing = existingUsers.find(u => u.login.toLowerCase() === emp.identifiant.toLowerCase())
                if (existing) {
                    newMap[emp.refEmploye] = existing.id
                    ok++
                    addMsg(`⚠ Employé "${emp.nom}" (${emp.identifiant}) existe déjà (ID: ${existing.id}). Ignoré.`, 'warning')
                    continue
                }

                const response = await api_service.post('users', {
                    login: emp.identifiant,
                    lastname: emp.nom,
                    password: emp.mdp,
                    employee: '1',
                    gender: mapGender(emp.genre),
                    weeklyhours: emp.heureTravailSemaine,
                    ref_employee: emp.refEmploye,
                    job: emp.poste
                })
                const id = response.data
                newMap[emp.refEmploye] = id
                ok++
                addMsg(`✓ Employé "${emp.nom}" créé (ID: ${id})`, 'success')
            } catch (e) {
                const errMsg = e.response?.data?.error?.message || e.response?.data?.error?.[0] || e.message
                addMsg(`✗ Erreur "${emp.nom}": ${errMsg}`, 'error')
            }
        }

        setEmployeMap(prev => ({ ...prev, ...newMap }))
        addMsg(`Import employés: ${ok}/${employes.length}`, ok === employes.length ? 'success' : 'warning')
        setProgress({ current: 0, total: 0, section: '' })
        setLoading(false)
    }


    const handleSalaireFile = (e) => {
        const file = e.target.files[0]
        if (!file) return
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            transformHeader: h => h.toLowerCase().trim(),
            complete: (results) => {
                const sal = results.data.map(row => ({
                    refSalaire: getVal(row, 'ref_salaire', 'refsalaire', 'ref', 'id'),
                    refEmploye: getVal(row, 'ref_employe', 'refemploye', 'employe', 'user'),
                    dateDebut: getVal(row, 'date_debut', 'datedebut', 'debut', 'start'),
                    dateFin: getVal(row, 'date_fin', 'datefin', 'fin', 'end'),
                    montant: parseMontant(getVal(row, 'montant', 'somme', 'amount', 'prix')),
                    paiement: getVal(row, 'paiement', 'paiements', 'payment')
                })).filter(s => s.refSalaire && s.refEmploye)
                setSalaires(sal)
                addMsg(`${sal.length} salaire(s) lu(s) depuis le CSV`)
            }
        })
    }

    const sendSalaires = async () => {
        if (salaires.length === 0) return addMsg('Aucun salaire à importer.', 'error')
        setLoading(true)

        // 1. Mapping employé
        let currentMap = { ...employeMap }
        if (Object.keys(currentMap).length === 0) {
            addMsg('Récupération des utilisateurs Dolibarr...')
            try {
                const usersResp = await api_service.get('users')
                for (const u of usersResp.data) {
                    if (u.ref_employee) currentMap[u.ref_employee] = u.id
                }
                setEmployeMap(currentMap)
            } catch (e) {
                addMsg('Erreur récupération utilisateurs: ' + e.message, 'error')
                setLoading(false)
                return
            }
        }

        // 2. Compte bancaire
        let accId = bankAccountId
        if (!accId) {
            try {
                const bankResp = await api_node.get('/api/dolibarr/bank-account')
                accId = bankResp.data.accountId
                setBankAccountId(accId)
            } catch (e) {
                addMsg('Erreur compte bancaire: ' + e.message, 'error')
                setLoading(false)
                return
            }
        }

        // 3. Créer salaires + paiements
        const newSalMap = {}
        let ok = 0
        setProgress({ current: 0, total: salaires.length, section: 'salaires' })

        for (let i = 0; i < salaires.length; i++) {
            const sal = salaires[i]
            setProgress({ current: i + 1, total: salaires.length, section: 'salaires' })
            try {
                const fkUser = currentMap[sal.refEmploye]
                if (!fkUser) {
                    addMsg(`✗ Salaire ref ${sal.refSalaire}: employé ref ${sal.refEmploye} introuvable`, 'error')
                    continue
                }

                const datesp = convertDateDolibarr(sal.dateDebut)
                const dateep = convertDateDolibarr(sal.dateFin)

                const salResponse = await api_service.post('salaries', {
                    fk_user: parseInt(fkUser),
                    amount: sal.montant,
                    datesp,
                    dateep,
                    label: `Salaire ref ${sal.refSalaire}`
                })

                const salId = salResponse.data
                newSalMap[sal.refSalaire] = salId
                addMsg(`✓ Salaire ref ${sal.refSalaire} créé (ID: ${salId})`, 'success')

                const paiements = parsePaiements(sal.paiement)
                for (const p of paiements) {
                    try {
                        await api_service.post(`salaries/${salId}/payments`, {
                            datepaye: convertDateDolibarr(p.date),
                            paiementtype: 'VIR',
                            chid: salId,
                            amounts: { [salId]: p.montant },
                            accountid: accId
                        })
                        addMsg(`  → Paiement ${p.montant} le ${p.date} OK`, 'success')
                    } catch (pe) {
                        addMsg(`  → ✗ Paiement ${p.montant}: ${pe.response?.data?.error?.message || pe.message}`, 'error')
                    }
                }
                ok++
            } catch (e) {
                const errMsg = e.response?.data?.error?.message || e.response?.data?.error?.[0] || e.message
                addMsg(`✗ Salaire ref ${sal.refSalaire}: ${errMsg}`, 'error')
            }
        }

        setSalaireMap(prev => ({ ...prev, ...newSalMap }))
        addMsg(`Import salaires: ${ok}/${salaires.length}`, ok === salaires.length ? 'success' : 'warning')
        setProgress({ current: 0, total: 0, section: '' })
        setLoading(false)
    }


    const handleImgChange = (e) => {
        const file = e.target.files[0]
        if (!file) return
        setImagesZip(file)
        addMsg(`ZIP sélectionné: ${file.name}`)
    }

    const sendImages = async () => {
        if (!imagesZip) return addMsg('Aucun fichier ZIP.', 'error')
        setLoading(true)

        let currentMap = { ...employeMap }
        if (Object.keys(currentMap).length === 0) {
            addMsg('Récupération des utilisateurs Dolibarr...')
            try {
                const usersResp = await api_service.get('users')
                for (const u of usersResp.data) {
                    if (u.ref_employee) currentMap[u.ref_employee] = u.id
                }
                setEmployeMap(currentMap)
            } catch (e) {
                addMsg('Erreur récupération utilisateurs: ' + e.message, 'error')
                setLoading(false)
                return
            }
        }

        setProgress({ current: 1, total: 1, section: 'images ZIP' })
        try {
            const formData = new FormData()
            formData.append('zipfile', imagesZip)
            formData.append('mapping', JSON.stringify(currentMap))

            const response = await api_node.post('/api/upload-zip', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            addMsg(`✓ ${response.data.message}`, 'success')
        } catch (e) {
            addMsg(`✗ Erreur ZIP: ${e.response?.data?.error || e.message}`, 'error')
        }
        setProgress({ current: 0, total: 0, section: '' })
        setLoading(false)
    }

    return (
        <div className="import-page">
            <h2 className="page-title">Import de données</h2>

            {progress.total > 0 && (
                <div className="alert-info">
                    Progression de l'import des {progress.section} : {progress.current} sur {progress.total}
                </div>
            )}

            <div className="import-section section-block">
                <h2>CSV 1 — Employés</h2>
                <p className="text-muted-sm mb-8">Colonnes: ref_employe, nom, genre, identifiant, mdp, heure_travail_semaine</p>
                <div className="flex-row gap-12 align-center">
                    <input type="file" accept=".csv" onChange={handleEmployeFile} disabled={loading} className="field-input flex-1"/>
                    <button className="btn" onClick={sendEmployes} disabled={loading || employes.length === 0}>
                        Importer {employes.length} employé(s)
                    </button>
                </div>
            </div>

            <div className="import-section section-block">
                <h2>CSV 2 — Salaires & Paiements</h2>
                <p className="text-muted-sm mb-8">Colonnes: ref_salaire, ref_employe, date_debut, date_fin, montant, paiement</p>
                <div className="flex-row gap-12 align-center">
                    <input type="file" accept=".csv" onChange={handleSalaireFile} disabled={loading} className="field-input flex-1"/>
                    <button className="btn" onClick={sendSalaires} disabled={loading || salaires.length === 0}>
                        Importer {salaires.length} salaire(s)
                    </button>
                </div>
            </div>

            <div className="import-section section-block">
                <h2>Images (fichier ZIP)</h2>
                <p className="text-muted-sm mb-8">Le nom des images doit correspondre à ref_employe (ex: 1.png pour ref 1)</p>
                <div className="flex-row gap-12 align-center">
                    <input type="file" accept=".zip" onChange={handleImgChange} disabled={loading} className="field-input flex-1"/>
                    <button className="btn" onClick={sendImages} disabled={loading || !imagesZip}>
                        Uploader les images
                    </button>
                </div>
            </div>

            {messages.length > 0 && (
                <div className="import-section section-block">
                    <div className="flex-row justify-between align-center mb-16">
                        <h4 className="font-medium">Journal</h4>
                        <button className="btn btn-outline btn-sm" onClick={() => setMessages([])} disabled={loading}>Effacer</button>
                    </div>
                    <div className="log-container">
                    {messages.map((msg, i) => (
                        <div key={i} className={`log-item ${msg.type === 'error' ? 'text-danger' : msg.type === 'success' ? 'text-success' : msg.type === 'warning' ? 'text-danger' : ''}`}>
                            <span className="log-time">[{msg.time}]</span> {msg.text}
                        </div>
                    ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ImportData
