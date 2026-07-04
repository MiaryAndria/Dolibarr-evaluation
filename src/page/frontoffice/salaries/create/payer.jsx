import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import api_service from "../../../../api/api_service";

function PayerSalaire() {
    const [user, setUser] = useState([]);
    const [selectedId, setSelectedId] = useState('');
    const [montant, setMontant] = useState(0);
    const [selectedSalaire, setSelectedSalaire] = useState([])
    const [salaire, setSalaire] = useState([]);
    const [montantsPaiement, setMontantsPaiement] = useState('')
    const [paiement, setPaiements] = useState([]);
    const [datePayement, setDatePayement] = useState('');
    const [dateDebut, setdateDebut] = useState('');
    const [dateFin, setdateFin] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const getUser = async () => {
        try {
            const response = await api_service.get('users?sortfield=t.rowid&sortorder=ASC&limit=100&sqlfilters=(admin:=:0)')
            setUser(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    function convertDate(dateStr) {
        if (!dateStr) return null
        const date = new Date(dateStr)
        return Math.floor(date.getTime() / 1000)
    }

    const handleCheckboxChange = (id) => {
        setSelectedSalaire(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const creerSalaire = async () => {
        if (montant < 0) {
            setMessage('montant ne peux pas etre negatif ')
            return
        } else {
            try {
                const response = await api_service.post('salaries', {
                    fk_user: selectedId,
                    datesp: convertDate(dateDebut),
                    dateep: convertDate(dateFin),
                    amount: montant,
                    label: 'salaire',
                    paye: 0
                })
            } catch (e) {
                console.log(e)
            }
            getSAllSalaire();
        }
    }

    const getSAllSalaire = async () => {
        try {
            const response = await api_service.get('salaries')
            setSalaire(response.data)
        } catch (e) {

        }
    }

    const getAllPayements = async () => {
        try {
            const response = await api_service.get('salaries/payments')
            setPaiements(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getMontantsDejaPayes = (salaireId) => {
        const montantPayer = paiement
            .filter(p => p.fk_salary === String(salaireId))
            .reduce((somme, p) => somme + parseFloat(p.amount), 0);
        return montantPayer;
    };

    const payerSalaire = async (salaireId) => {
        const montantSaisi = Number(montantsPaiement)
        const date = datePayement
        for (const id of selectedSalaire) {
            const salaireActuel = salaire.find(s => s.id === id)
            if (!salaireActuel) return

            const totalPaye = getMontantsDejaPayes(id)
            const resteAPayer = (parseFloat(salaireActuel.amount) || 0) - totalPaye

            const montantFinal = Math.min(montantSaisi, resteAPayer)

            if (montantFinal <= 0) {
                setMessage("montant invalide")
                return
            }
            try {
                await api_service.post(
                    `salaries/${id}/payments`,
                    {
                        datepaye: convertDate(date),
                        paiementtype: 'VIR',
                        amounts: {
                            [id]: montantFinal
                        },
                        accountid: 1,
                        chid: id
                    }
                )
                getAllPayements()
            } catch (e) {
                console.log("ERROR API:", e.response?.data)
            }
        }

    }

    const getStatusLabel = (s, totalPaye) => {
        if (s.paye === "1" || totalPaye >= parseFloat(s.amount)) {
            return <span style={{ color: 'green', fontWeight: 'bold' }}> Payée</span>
        } else if (totalPaye > 0) {
            return <span style={{ color: 'green', fontWeight: 'bold' }}> Règlement commencé </span>
        }
        return <span style={{ color: 'red', fontWeight: 'bold' }}> Impayée</span>
    }

    useEffect(() => {
        getUser();
        getSAllSalaire();
        getAllPayements();
    }, []);

    return (
        <div>
            <button onClick={() => navigate('/payer/all')}> Gerer multipaiement </button>
            <h1>Paiement salaire </h1>
            <p>{message}</p>
            <p>Entrer montant</p>
            <input onChange={(e) => setMontant(Number(e.target.value))} type="number" placeholder="10000" />
            <p>Choisissez employé</p>
            <select
                value={selectedId ?? ""}
                onChange={(e) =>
                    setSelectedId(e.target.value ? parseInt(e.target.value) : null)
                }
            >
                <option value="">-- Choisir --</option>
                {user.map((u) => (
                    <option key={u.id} value={u.id}>
                        {u.lastname} {u.firstname}
                    </option>
                ))}
            </select>

            <p>Date début</p>
            <input type="date" onChange={(e) => setdateDebut(e.target.value)} />

            <p>Date fin</p>
            <input type="date" onChange={(e) => setdateFin(e.target.value)} />

            <button onClick={creerSalaire}>
                creer salaire
            </button>

            <h3>Sélectionnez les salaires à payer :</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {salaire.map(s => {
                    const totalPaye = getMontantsDejaPayes(s.id);
                    const restant = parseFloat(s.amount) - totalPaye;
                    const userSalaire = user.find(u => u.id === s.fk_user);
                    return (
                        <li key={s.id} style={{ margin: '10px 0' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    checked={selectedSalaire.includes(s.id)}
                                    onChange={() => handleCheckboxChange(s.id)}
                                    disabled={restant ===0}
                                />
                                <span>{userSalaire?.lastname} {userSalaire?.firstname} - {s.label}</span>
                                <span>Montant: {s.amount}</span>
                                <span>Payé: {totalPaye}</span>
                                <span>Restant: {restant}</span>
                                <span>{getStatusLabel(s, totalPaye)}</span>
                            </label>
                        </li>
                    );
                })}
            </ul>
            <input type="number" onChange={(e) => setMontantsPaiement(e.target.value)} placeholder="choisissez montant à payer " />
            <input type="date" onChange={(e) => setDatePayement(e.target.value)} placeholder="choisissez date de paiement " />
            <button onClick={() => payerSalaire(selectedSalaire)}> Payer salaire </button>
        </div >
    )
}

export default PayerSalaire;