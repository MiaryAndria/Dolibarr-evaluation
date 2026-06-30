import { useState, useEffect } from "react"
import Papa from "papaparse"
import axios from "axios"
import api_service from "../../../api/api_service"
import api_node from "../../../api/api_node"

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

    function convertDate(dateStr) {
        if (!dateStr) return 0
        const s = String(dateStr).trim()
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
        try {
            let jsonStr = String(str).trim()
            if (jsonStr.startsWith('{')) jsonStr = '[' + jsonStr.slice(1)
            if (jsonStr.endsWith('}')) jsonStr = jsonStr.slice(0, -1) + ']'
            const arr = JSON.parse(jsonStr)
            return arr.map(entry => ({
                date: entry[0],
                montant: parseFloat(entry[1])
            }))
        } catch (e) {
            console.warn('Impossible de parser le champ paiement:', str, e)
            return []
        }
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
                    refEmploye: (row.ref_employe || row.ref || '').trim(),
                    nom: (row.nom || row.name || '').trim(),
                    genre: (row.genre || row.sexe || '').trim(),
                    identifiant: (row.identifiant || row.login || '').trim(),
                    mdp: (row.mdp || row.mot_de_passe || row.password || '').trim(),
                    heureTravailSemaine: parseMontant(row.heure_travail_semaine || row.heures)
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
        } catch (e) {}

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
                    ref_employee: emp.refEmploye
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
                    refSalaire: (row.ref_salaire || row.ref || '').trim(),
                    refEmploye: (row.ref_employe || '').trim(),
                    dateDebut: (row.date_debut || row.debut || '').trim(),
                    dateFin: (row.date_fin || row.fin || '').trim(),
                    montant: parseMontant(row.montant),
                    paiement: (row.paiement || row.paiements || '').trim()
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

                const datesp = convertDate(sal.dateDebut)
                const dateep = convertDate(sal.dateFin)

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
                            datepaye: convertDate(p.date),
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
        <div>
            <h2>Import de données</h2>
            
            {progress.total > 0 && (
                <div style={{ marginBottom: '16px', padding: '10px', backgroundColor: '#e0f2fe', color: '#0369a1', fontWeight: 'bold' }}>
                    Progression de l'import des {progress.section} : {progress.current} sur {progress.total}
                </div>
            )}

            <h3>CSV 1 — Employés</h3>
            <p>Colonnes: ref_employe, nom, genre, identifiant, mdp, heure_travail_semaine</p>
            <input type="file" accept=".csv" onChange={handleEmployeFile} disabled={loading} />
            <button onClick={sendEmployes} disabled={loading || employes.length === 0}>
                Importer {employes.length} employé(s)
            </button>

            <hr />

            <h3>CSV 2 — Salaires & Paiements</h3>
            <p>Colonnes: ref_salaire, ref_employe, date_debut, date_fin, montant, paiement</p>
            <input type="file" accept=".csv" onChange={handleSalaireFile} disabled={loading} />
            <button onClick={sendSalaires} disabled={loading || salaires.length === 0}>
                Importer {salaires.length} salaire(s)
            </button>

            <hr />

            <h3>Images (fichier ZIP)</h3>
            <p>Le nom des images doit correspondre à ref_employe (ex: 1.png pour ref 1)</p>
            <input type="file" accept=".zip" onChange={handleImgChange} disabled={loading} />
            <button onClick={sendImages} disabled={loading || !imagesZip}>
                Uploader les images
            </button>

            <hr />

            {messages.length > 0 && (
                <div>
                    <h4>Journal <button onClick={() => setMessages([])} disabled={loading}>Effacer</button></h4>
                    {messages.map((msg, i) => (
                        <div key={i} style={{ color: msg.type === 'error' ? 'red' : msg.type === 'success' ? 'green' : msg.type === 'warning' ? '#d97706' : 'black' }}>
                            [{msg.time}] {msg.text}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ImportData
