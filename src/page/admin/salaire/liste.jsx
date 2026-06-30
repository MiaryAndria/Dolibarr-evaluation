import { useEffect, useState } from "react"
import api_service from "../../../api/api_service";
function ListeSalaire() {
    const [salaire, setSalaire] = useState([]);
    const [user, setUser] = useState([]);
    const [result, setResult] = useState({ M: 0, F: 0 });
    const [resultMois, setResultMois] = useState({ Janvier: 0, Fevrier: 0, Mars: 0, Avril: 0, Mai: 0, Juin: 0, Juilet: 0, Aout: 0, Septembre: 0, Octobre: 0, Novembre: 0, Decembre: 0 });

    const listeMois = [{ id: '01', label: 'Janvier' }, { id: '02', label: 'Fevrier' }, { id: '03', label: 'Mars' },
    { id: '04', label: 'Avril' }, { id: '05', label: 'Mai' }, { id: '06', label: 'Juin' }, { id: '07', label: 'Juillet' },
    { id: '08', label: 'Aout' }, { id: '09', label: 'Septembre' }, { id: '10', label: 'Octobre' },
    { id: '11', label: 'Novembre' }, { id: '12', label: 'Decembre' }]

    const getSalaires = async () => {
        try {
            const response = await api_service.get('salaries?sortfield=t.rowid&sortorder=ASC&limit=100')
            setSalaire(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getUser = async () => {
        try {
            const response = await api_service.get('users?sortfield=t.rowid&sortorder=ASC&limit=100')
            setUser(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    function getMoisLabel(timestamp) {
        if (!timestamp) return '-'
        const MOIS = [
            'Janvier', 'Fevrier', 'Mars', 'Avril',
            'Mai', 'Juin', 'Juillet', 'Aout',
            'Septembre', 'Octobre', 'Novembre', 'Decembre'
        ]
        const date = new Date(timestamp * 1000)
        return MOIS[date.getMonth()]
    }

    const getSalaireParGenre = async () => {
        const calc = { M: 0, F: 0 };
        for (const sal of salaire) {
            const userFound = user.find(u => u.id === sal.fk_user)
            const genre = userFound?.gender;
            const amount = Number(sal.amount);
            if (genre === 'man') {
                calc.M += amount
            } else if (genre === 'woman') {
                calc.F += amount
            }
            setResult(calc)
        }
    }

    const getSalaireParMois = async () => {
        const salaireParMois = {
            Janvier: 0, Fevrier: 0, Mars: 0, Avril: 0, Mai: 0, Juin: 0, Juillet: 0, Aout: 0,
            Septembre: 0, Octobre: 0, Novembre: 0, Decembre: 0
        };
        for (const sal of salaire) {
            const amount = Number(sal.amount);
            const salaryMonth = getMoisLabel(sal.dateep)
            salaireParMois[salaryMonth] += amount
        }
        setResultMois(salaireParMois)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await Promise.all([
                    getSalaires(),
                    getUser()
                ]);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        getSalaireParGenre()
    }, [salaire, user])

    useEffect(() => {
        getSalaireParMois()
    }, [salaire])


    return (
        <div>
            <h1>Dashboard suivi salaire</h1>

            <p>Suivi salaire par genre</p>
            <table>
                <thead>
                    <tr>
                        <th>homme</th>
                        <th>femme</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{result.M}</td>
                        <td>{result.F}</td>
                    </tr>
                </tbody>
            </table>

            <p>Suivi salaire par mois </p>
            <table>
                <thead>
                    <tr>
                        {listeMois.map(l => (
                            <th key={l.id}>{l.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {listeMois.map(m =>(
                            <td key={m.id}>
                                {resultMois[m.label]}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ListeSalaire
