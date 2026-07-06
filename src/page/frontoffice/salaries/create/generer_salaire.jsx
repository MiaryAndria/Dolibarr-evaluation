import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import api_service from "../../../../api/api_service";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./slider.css"
import "../../../../styles/paiement.css"
import api_sqlite from "../../../../api/api_sqlite";

function GenererSalaire() {
    const [jourFerier, setJourFerier] = useState([]);
    const [idsSelectionnes, setIdsSelectionnes] = useState([]);
    const [posteSearch, setPosteSearch] = useState('');
    const [genderSearch, setGenderSearch] = useState('');
    const [salaires, setSalaire] = useState([]);
    const [salaireParJour, setSalaireParJour] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [salarier, setSalarier] = useState([]);
    const [range, setRange] = useState([0, 200]);
    const [mois, setMois] = useState('');
    const [annee, setAnnee] = useState('');

    function convertDate(dateStr) {
        if (!dateStr) return null
        const date = new Date(dateStr)
        return Math.floor(date.getTime() / 1000)
    }

    function toDateStr(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        return `${y}-${m}-${d}`;
    }

    function getDebutEtFinMois(annee, mois) {
        const premierJour = new Date(Number(annee), Number(mois) - 1, 1);
        const dernierJour = new Date(Number(annee), Number(mois), 0);
        return {
            premierJour: toDateStr(premierJour),
            dernierJour: toDateStr(dernierJour),
        };
    }

    function estJourFerier(dateStr) {
        return jourFerier.some(f => f.date === dateStr);
    }

    function toDateStrUTC(date) {
        const y = date.getUTCFullYear();
        const m = String(date.getUTCMonth() + 1).padStart(2, "0");
        const d = String(date.getUTCDate()).padStart(2, "0");
        return `${y}-${m}-${d}`;
    }

    function estDejaPayePourUser(dateStr, userSalaires) {
        return userSalaires.some(s => {
            const dsp = toDateStrUTC(new Date(Number(s.datesp) * 1000));
            const dep = toDateStrUTC(new Date(Number(s.dateep) * 1000));
            return dateStr >= dsp && dateStr <= dep;
        });
    }

    function construireSegments(joursValides) {
        if (joursValides.length === 0) return [];
        const segments = [];
        let segDebut = joursValides[0];
        let segFin = joursValides[0];
        let segMontant = joursValides[0].montant;

        for (let i = 1; i < joursValides.length; i++) {
            const [py, pm, pd] = joursValides[i - 1].dateStr.split('-').map(Number);
            const [cy, cm, cd] = joursValides[i].dateStr.split('-').map(Number);
            const prev = Date.UTC(py, pm - 1, pd);
            const curr = Date.UTC(cy, cm - 1, cd);
            const diff = (curr - prev) / (1000 * 60 * 60 * 24);

            if (diff === 1) {
                segFin = joursValides[i];
                segMontant += joursValides[i].montant;
            } else {
                segments.push({ debut: segDebut.dateStr, fin: segFin.dateStr, montant: segMontant });
                segDebut = joursValides[i];
                segFin = joursValides[i];
                segMontant = joursValides[i].montant;
            }
        }
        segments.push({ debut: segDebut.dateStr, fin: segFin.dateStr, montant: segMontant });
        return segments;
    }

    const getAllJourFerier = async () => {
        try {
            const response = await api_sqlite.get('/api/ferier')
            setJourFerier(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    const applyFilter = () => {
        let result = [...salarier];
        if (genderSearch) {
            result = result.filter(u => u.gender === genderSearch);
        }
        if (posteSearch) {
            result = result.filter(u => u.job === posteSearch)
        }
        result = result.filter(u => Number(u.weeklyhours) >= range[0] && Number(u.weeklyhours) <= range[1]);
        setFilteredUsers(result);
    };

    const getSalarier = async () => {
        try {
            const response = await api_service.get('users?sortfield=t.rowid&sortorder=ASC&limit=100&sqlfilters=(admin:=:0)')
            setSalarier(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getAllSalaire = async () => {
        try {
            const response = await api_service.get('/salaries')
            setSalaire(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const genererSalaire = async () => {
        if (!mois || !annee || !salaireParJour || idsSelectionnes.length === 0) return;
        const { premierJour, dernierJour } = getDebutEtFinMois(annee, mois);
        function parseDateLocale(dateStr) {
            const [y, m, d] = dateStr.split('-').map(Number);
            return new Date(y, m - 1, d);
        }

        const dateDebut = parseDateLocale(premierJour);
        const dateFin = parseDateLocale(dernierJour);

        for (const userId of idsSelectionnes) {
            const userSalaires = salaires.filter(s => String(s.fk_user) === String(userId));
            const joursValides = [];

            let courant = new Date(dateDebut);
            while (courant <= dateFin) {
                const dateStr = toDateStr(courant);
                const dejaPaye = estDejaPayePourUser(dateStr, userSalaires);

                if (!dejaPaye) {
                    const ferier = estJourFerier(dateStr);
                    const montantJour = ferier ? Number(salaireParJour) * 2 : Number(salaireParJour);
                    joursValides.push({ dateStr, montant: montantJour });
                }

                courant.setDate(courant.getDate() + 1);
            }

            const segments = construireSegments(joursValides);

            for (const seg of segments) {
                try {
                    await api_service.post('salaries', {
                        fk_user: userId,
                        datesp: convertDate(seg.debut),
                        dateep: convertDate(seg.fin),
                        amount: seg.montant,
                        label: 'salaire',
                        paye: 0
                    })
                } catch (e) {
                    console.log(e)
                }
            }
        }

        setIdsSelectionnes([]);
        await getAllSalaire();
    }

    const handleCheckboxChange = (id) => {
        setIdsSelectionnes(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const clearFilter = () => {
        setGenderSearch('')
        setPosteSearch('')
        setRange([0, 200])
        setIdsSelectionnes([])
    }

    useEffect(() => {
        applyFilter();
    }, [salarier, posteSearch, genderSearch, range]);

    useEffect(() => {
        getSalarier();
        getAllJourFerier();
        getAllSalaire();
    }, []);

    return (
        <div className="paiement-page">
            <h1 className="page-title">Génération salaire — multipaiement</h1>

            <div className="filter-bar">
                <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label">Genre</label>
                    <select className="field-select"
                        value={genderSearch}
                        onChange={(e) => setGenderSearch(e.target.value)}
                    >
                        <option value="">Tous</option>
                        <option value="man">Homme</option>
                        <option value="woman">Femme</option>
                    </select>
                </div>

                <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label">Poste</label>
                    <select className="field-select"
                        value={posteSearch}
                        onChange={(e) => setPosteSearch(e.target.value)}
                    >
                        <option value="">Poste</option>
                        <option value="Comptable">Comptable</option>
                        <option value="Technicien">Technicien</option>
                        <option value="Vente">Vente</option>
                    </select>
                </div>

                <div className="form-group slider-container" style={{ flex: 2 }}>
                    <label className="form-label">Heures de travail</label>
                    <Slider
                        range
                        min={0}
                        max={200}
                        value={range}
                        onChange={setRange}
                    />
                    <p className="slider-range-label" style={{ marginTop: "8px" }}>
                        {range[0]}h — {range[1]}h
                    </p>
                </div>

                <button className="btn btn-outline" onClick={clearFilter}>Supprimer filtre</button>
            </div>

            <ul className="check-list">
                {filteredUsers.map(s => (
                    <li key={s.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={idsSelectionnes.includes(s.id)}
                                onChange={() => handleCheckboxChange(s.id)}
                            />
                            <span>{s.lastname} {s.firstname} <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>({s.job || "Aucun poste"})</span></span>
                        </label>
                    </li>
                ))}
            </ul>

            <div className="actions-row">
                <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label">Mois</label>
                    <input
                        className="field-input"
                        type="number"
                        min="1"
                        max="12"
                        placeholder="6"
                        onChange={(e) => setMois(e.target.value)}
                    />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label">Année</label>
                    <input
                        className="field-input"
                        type="number"
                        placeholder="2026"
                        onChange={(e) => setAnnee(e.target.value)}
                    />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label">Salaire par jour</label>
                    <input
                        className="field-input"
                        type="number"
                        placeholder="10"
                        onChange={(e) => setSalaireParJour(e.target.value)}
                    />
                </div>
            </div>

            <div className="actions-row">
                <button className="btn" onClick={genererSalaire}>Générer</button>
            </div>
        </div>
    )
}

export default GenererSalaire;
