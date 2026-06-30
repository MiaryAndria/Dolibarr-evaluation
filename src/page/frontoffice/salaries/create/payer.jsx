import { useEffect, useState } from "react"
import api_service from "../../../../api/api_service";

function PayerSalaire() {
    const [user, setUser] = useState([]);
    const [selectedId, setSelectedId] = useState('');
    const [montant, setMontant] = useState(0);
    const [salaire, setSalaire] = useState([]);
    const [montantsPaiement, setMontantsPaiement] = useState({})
    const [paiement, setPaiements] = useState([]);
    const [datePayement, setDatePayement] = useState({});
    const [dateDebut, setdateDebut] = useState('');
    const [dateFin, setdateFin] = useState('');
    const [message, setMessage] = useState('');

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

    const creerSalaire = async (data) => {
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
        const montantSaisi = Number(montantsPaiement[salaireId] || 0)
        const date = datePayement[salaireId]

        const salaireActuel = salaire.find(s => s.id === salaireId)
        if (!salaireActuel) return

        const totalPaye = getMontantsDejaPayes(salaireId)
        const resteAPayer = (parseFloat(salaireActuel.amount) || 0) - totalPaye

        const montantFinal = Math.min(montantSaisi, resteAPayer)

        if (montantFinal <= 0) {
            setMessage("montant invalide")
            return
        }

        try {
            await api_service.post(
                `salaries/${salaireId}/payments`,
                {
                    datepaye: convertDate(date),
                    paiementtype: 'VIR',
                    amounts: {
                        [salaireId]: montantFinal
                    },
                    accountid: 1,
                    chid: salaireId
                }
            )
            getAllPayements()
        } catch (e) {
            console.log("ERROR API:", e.response?.data)
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

    const userFiltrer = user.filter(u => u.id !== 1)

    useEffect(() => {
        getUser();
        getSAllSalaire();
        getAllPayements();
    }, []);



    return (
        <div>
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
                {userFiltrer.map((u) => (
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

            <table>
                <thead>
                    <tr>
                        <th>Libellé</th>
                        <th>Montant</th>
                        <th>Payé</th>
                        <th>Restant</th>
                        <th>Etat</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {salaire.map(s => {
                        const totalPaye = getMontantsDejaPayes(s.id);
                        const restant = parseFloat(s.amount) - totalPaye;

                        return (
                            <tr key={s.id}>
                                <td>{s.label}</td>
                                <td>{s.amount}</td>
                                <td>{totalPaye}</td>
                                <td>{restant}</td>
                                <td>{getStatusLabel(s, totalPaye)}</td>
                                <td>{s.paye !== "1" && restant > 0 ? (
                                    <div>
                                        <p>{message}</p>
                                        Entrer un montant de paiement (Max: {restant})
                                        <input
                                            value={montantsPaiement[s.id] || ''}
                                            onChange={(e) =>
                                                setMontantsPaiement(prev => ({
                                                    ...prev,
                                                    [s.id]: Number(e.target.value)
                                                }))
                                            }
                                            type="number"
                                        /><p>Choisissez date</p>
                                        <input type="date" onChange={(e) => setDatePayement(prev => ({
                                            ...prev, [s.id]: (e.target.value)
                                        }))} />
                                        <button onClick={() => payerSalaire(s.id)}>Faire ce paiement</button>
                                    </div>
                                ) : (
                                    <p style={{ color: 'green', fontWeight: 'bold' }}>Salaire entièrement payé !</p>
                                )}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PayerSalaire;