import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import api_service from "../../../../api/api_service";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./slider.css"

import "../../../../styles/paiement.css"

function MultiPaiement() {
    const [idsSelectionnes, setIdsSelectionnes] = useState([]);
    const [posteSearch, setPosteSearch] = useState('');
    const [genderSearch, setGenderSearch] = useState('');
    const [dateDebut, setdateDebut] = useState('');
    const [dateFin, setdateFin] = useState('');
    const [montant, setMontant] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [salarier, setSalarier] = useState([]);
    const [range, setRange] = useState([0, 200]);
    const navigate = useNavigate('');

    function convertDate(dateStr) {
        if (!dateStr) return null
        const date = new Date(dateStr)
        return Math.floor(date.getTime() / 1000)
    }
    const applyFilter = async () => {
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

    const creerSalaire = async () => {
        for (const i of idsSelectionnes) {
            if (montant < 0) {
                setMessage('montant ne peux pas etre negatif ')
                return
            } else {
                try {
                    const response = await api_service.post('salaries', {
                        fk_user: i,
                        datesp: convertDate(dateDebut),
                        dateep: convertDate(dateFin),
                        amount: montant,
                        label: 'salaire',
                        paye: 0
                    })
                    setIdsSelectionnes([]);
                } catch (e) {
                    console.log(e)
                }
            }
            console.log('creation salaire')

        }
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

    console.log(salarier)

    useEffect(() => {
        applyFilter();
    }, [salarier, posteSearch, genderSearch, range]);

    useEffect(() => {
        getSalarier()
    }, []);

    return (
        <div className="paiement-page">
            <h1 className="page-title">Page création salaire multiple</h1>

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
                    <label className="form-label">Montant</label>
                    <input className="field-input" onChange={(e) => setMontant(Number(e.target.value))} type="number" placeholder="10000" />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label">Date début</label>
                    <input className="field-input" type="date" onChange={(e) => setdateDebut(e.target.value)} />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label">Date fin</label>
                    <input className="field-input" type="date" onChange={(e) => setdateFin(e.target.value)} />
                </div>
            </div>

            <div className="actions-row">
                <button className="btn" onClick={creerSalaire}>Créer salaire</button>
                <button className="btn btn-outline" onClick={() => navigate('/liste/salarier')}>Voir liste salariés sans filtres</button>
                <button className="btn btn-outline" onClick={() => navigate('/salaire/creer/special')}>Creer salaire  avec gestion jour férié</button> 
            </div>

        </div>
    )
}

export default MultiPaiement;
