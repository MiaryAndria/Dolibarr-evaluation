import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import api_service from "../../../../api/api_service";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

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
        <div>
            <h1>Page creation salaire multiple</h1>
            <select
                value={genderSearch}
                onChange={(e) => setGenderSearch(e.target.value)}
            >
                <option value="">Genre</option>
                <option value="man">Homme</option>
                <option value="woman">Femme</option>
            </select>

            <select
                value={posteSearch}
                onChange={(e) => setPosteSearch(e.target.value)}
            >
                <option value="">Poste</option>
                <option value="Comptable">Comptable</option>
                <option value="Technicien">Technicien</option>
                <option value="Vente">Vente</option>
            </select>

            <Slider
                range
                min={0}
                max={200}
                value={range}
                onChange={setRange}
            />
            <p>
                Min : {range[0]} Heure - Max : {range[1]} Heure
            </p>
            <button onClick={clearFilter}>Supprimer filtre</button>

            <ul>
                {filteredUsers.map(s => (
                    <li key={s.id} style={{ margin: '10px 0' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <input
                                type="checkbox"
                                checked={idsSelectionnes.includes(s.id)}
                                onChange={() => handleCheckboxChange(s.id)}
                            />
                            {s.lastname}{s.firstname}
                        </label>
                    </li>
                ))}
            </ul>

            <p>Entrer montant</p>
            <input onChange={(e) => setMontant(Number(e.target.value))} type="number" placeholder="10000" />
            <p>Date début</p>
            <input type="date" onChange={(e) => setdateDebut(e.target.value)} />
            <p>Date fin</p>
            <input type="date" onChange={(e) => setdateFin(e.target.value)} />
            <button onClick={creerSalaire}> creer salaire</button>
            <button onClick={()=>navigate('/liste/salarier')}>Voir liste salarier sans filtres </button>

        </div>
    )
}

export default MultiPaiement;
