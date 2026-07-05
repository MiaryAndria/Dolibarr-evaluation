import { useEffect, useState } from "react"
import api_service from "../../../api/api_service";
import api_sqlite from "../../../api/api_sqlite";

import "../../../styles/salaries.css"

function ListeSalaire() {
    const [salaire, setSalaire] = useState([]);
    const [paiement, setPaiement] = useState([]);
    const [user, setUser] = useState([]);
    const [mois,setMois] = useState([]);
    const [result, setResult] = useState({ M: 0, F: 0 });
    const [resultPaiementGenre, setResultPaiementGenre] = useState({ M: 0, F: 0 });
    const [resultMois, setResultMois] = useState({
        Janvier: 0, Fevrier: 0, Mars: 0, Avril: 0, Mai: 0, Juin: 0,
        Juillet: 0, Aout: 0, Septembre: 0, Octobre: 0, Novembre: 0, Decembre: 0
    });

    const [resultMoisSalaire, setResultMoisSalaire] = useState({
        Janvier: 0, Fevrier: 0, Mars: 0, Avril: 0, Mai: 0, Juin: 0,
        Juillet: 0, Aout: 0, Septembre: 0, Octobre: 0, Novembre: 0, Decembre: 0
    });


    const getSalaires = async () => {
        try {
            const response = await api_service.get('salaries?sortfield=t.rowid&sortorder=ASC&limit=100')
            setSalaire(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getAllMonth = async () => {
        try {
            const response = await api_sqlite.get('/api/liste/mois')
            setMois(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getPaiements = async () => {
        try {
            const response = await api_service.get('salaries/payments')
            setPaiement(response.data)
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
        if (!timestamp) return null
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

    const getPaiementParGenre = () => {
        const calc = { M: 0, F: 0 }
        for (const p of paiement) {

            const salaireFound = salaire.find(s => s.id === p.fk_salary)
            if (!salaireFound) continue

            const userFound = user.find(u => u.id === salaireFound.fk_user)
            const genre = userFound?.gender
            const amount = Number(p.amount)

            if (genre === 'man') calc.M += amount
            else if (genre === 'woman') calc.F += amount
        }
        setResultPaiementGenre(calc)
    }

    const getPaiementParMois = () => {
        const paiementParMois = {
            Janvier: 0, Fevrier: 0, Mars: 0, Avril: 0, Mai: 0, Juin: 0,
            Juillet: 0, Aout: 0, Septembre: 0, Octobre: 0, Novembre: 0, Decembre: 0
        }
        for (const p of paiement) {
            const amount = Number(p.amount)
            const mois = getMoisLabel(p.datep)
            if (mois) paiementParMois[mois] += amount
        }
        setResultMois(paiementParMois)
    }

    const getSalaireParMois = () => {
        const salaireParMois = {
            Janvier: 0, Fevrier: 0, Mars: 0, Avril: 0, Mai: 0, Juin: 0,
            Juillet: 0, Aout: 0, Septembre: 0, Octobre: 0, Novembre: 0, Decembre: 0
        }
        for (const s of salaire) {
            const amount = Number(s.amount)
            const mois = getMoisLabel(s.datesp)
            if (mois) salaireParMois[mois] += amount
        }
        setResultMoisSalaire(salaireParMois)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await Promise.all([getSalaires(), getUser(), getPaiements(),getAllMonth()])
            } catch (error) { 
                console.error(error) }
        }
        fetchData()
    }, [])

    useEffect(() => {
        getSalaireParGenre()
        getSalaireParMois()
    }, [salaire, user])

    useEffect(() => {
        getPaiementParMois()
        getPaiementParGenre()
    }, [paiement, salaire, user])

    return (
        <div className="salaries-page">
            <h1 className="page-title">Dashboard suivi salaire</h1>
            
            <h3 className="section-block-title">Suivi salaire par genre</h3>
            <div className="table-wrapper mb-32">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Homme</th>
                        <th>Femme</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{result.M}</td>
                        <td>{result.F}</td>
                    </tr>
                </tbody>
            </table>
            </div>


            <h3 className="section-block-title">Suivi salaire par mois</h3>
            <div className="table-wrapper mb-32">
            <table className="data-table">
                <thead>
                    <tr>
                        {mois.map(m => <th key={m.id}>{m.date}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {mois.map(m => (
                            <td key={m.id}>{resultMoisSalaire[m.date] || 0}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
            </div>

            <h3 className="section-block-title">Suivi paiement par genre</h3>
            <div className="table-wrapper mb-32">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Homme</th>
                        <th>Femme</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{resultPaiementGenre.M}</td>
                        <td>{resultPaiementGenre.F}</td>
                    </tr>
                </tbody>
            </table>
            </div>

            <h3 className="section-block-title">Suivi paiement par mois</h3>
            <div className="table-wrapper mb-32">
            <table className="data-table">
                <thead>
                    <tr>
                        {mois.map(m => <th key={m.id}>{m.date}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {mois.map(m => (
                            <td key={m.id}>{resultMois[m.date] || 0}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ListeSalaire