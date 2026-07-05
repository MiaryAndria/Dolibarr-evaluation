import { useEffect, useState } from "react"
import api_service from "../../../api/api_service";
import { useNavigate } from "react-router-dom";
import "../../../styles/salaries.css"

function Salaries() {
    const [salarier, setSalarier] = useState([]);
    const [salaires, setSalaires] = useState([]);
    const [paiement, setPaiements] = useState([]);
    const [search, setSearch] = useState('');
    const [genderSearch, setGenderSearch] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [activiteSearch, setActiviteSearch] = useState('');
    const [statusPaidSearch, setActivitePaidSearch] = useState();

    const navigate = useNavigate()
    const baseUrl = api_service.defaults.baseURL.replace('/api/index.php/', '')

    const getPhotoUrl = (user) => {
        const numberPath = parseInt(user.id) - 1
        return `${baseUrl}/viewimage.php?modulepart=userphoto&file=${user.id}/photos/${numberPath}.png`
    }

    const getAllSalaires = async () => {
        try {
            const response = await api_service.get('salaries')
            setSalaires(response.data)
        } catch (e) {
            console.log(e)
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

    const getSalarier = async () => {
        try {
            const response = await api_service.get(
                'users?sortfield=t.rowid&sortorder=ASC&limit=100&sqlfilters=(admin:=:0)'
            );
            setSalarier(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    const getPaymentStatus = (userId) => {

        const userSalaires = salaires.filter(s => s.fk_user === userId);
        const totalSalaire = userSalaires.reduce((sum, salaire) => sum + parseFloat(salaire.amount), 0);
        if (userSalaires.length === 0) return "no_salary";

        const calculerTotalPaye = () => {
            let total = 0 
            return userSalaires.reduce((sum, salaire) => {
                const payePourCeSalaire = getPaiementPourSalaire(salaire.id);
                total =  sum + payePourCeSalaire;
                return total;
            }, 0);
        };

        const getPaiementPourSalaire = (salaireId) => {
            return paiement
                .filter(p => p.fk_salary === String(salaireId))
                .reduce((total, p) => total + parseFloat(p.amount), 0);
        };

        const totalPaye = calculerTotalPaye();
        const restant = totalSalaire - totalPaye;
        if (totalPaye <= 0) return "unpaid";
        if (restant <= 0) return "paid";
        return "partial";
    };

    const applyFilter = () => {
        let result = [...salarier];

        if (search) {
            result = result.filter(u =>
                (u.lastname || "")
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );
        }

        if (statusPaidSearch) {
            result = result.filter(u =>
                getPaymentStatus(u.id) === statusPaidSearch
            );
        }

        if (genderSearch) {
            result = result.filter(u => u.gender === genderSearch);
        }

        if (activiteSearch !== "") {
            result = result.filter(u => String(u.status) === String(activiteSearch));
        }

        setFilteredUsers(result);
    };

    const clearFilter = () => {
        setSearch('')
        setGenderSearch('')
        setActiviteSearch('')
        setActivitePaidSearch('')
    }

    useEffect(() => {
        applyFilter();
    }, [salarier, search, genderSearch, activiteSearch, statusPaidSearch]);

    useEffect(() => {
        getSalarier();
        getAllSalaires();
        getAllPayements();
    }, []);

    return (
        <div className="salaries-page">
            <h1 className="page-title">Liste des salariés</h1>
            <div className="filter-bar">

                <input className="field-input" type="text" placeholder="Rechercher par nom" value={search} onChange={(e) => setSearch(e.target.value)} />

                <select className="field-select"
                    value={genderSearch}
                    onChange={(e) => setGenderSearch(e.target.value)}
                >
                    <option value="">Genre</option>
                    <option value="man">Homme</option>
                    <option value="woman">Femme</option>
                </select>

                <select className="field-select"
                    value={activiteSearch}
                    onChange={(e) => setActiviteSearch(e.target.value)}
                >
                    <option value="">Statut compte</option>
                    <option value="1">Actif</option>
                    <option value="0">Inactif</option>
                </select>

                <select className="field-select"
                    value={statusPaidSearch}
                    onChange={(e) => setActivitePaidSearch(e.target.value)}
                >
                    <option value="">Statut paiement</option>
                    <option value="paid">Payé</option>
                    <option value="partial">En cours</option>
                    <option value="unpaid">Impayé</option>
                    <option value="no_salary">Aucun salaire</option>
                </select>

                <button className="btn btn-outline" onClick={clearFilter}>
                    Reset
                </button>

            </div>
            <div className="table-wrapper">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Nom</th>
                            <th>Login</th>
                            <th>Genre</th>
                            <th>Poste</th>
                            <th>Statut</th>
                            <th>Montant total</th>
                            <th>Payé</th>
                            <th>Restant</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredUsers.map(user => {
                            const userSalaires = salaires.filter(s => s.fk_user === user.id)
                            if (userSalaires.length === 0) {
                                return (
                                    <tr key={user.id}>
                                        <td>
                                            <img
                                                src={getPhotoUrl(user)}
                                                width={50}
                                                height={50}
                                                alt={user.lastname}
                                            />
                                        </td>
                                        <td>{user.lastname}</td>
                                        <td>{user.login}</td>
                                        <td>{user.gender || "-"}</td>
                                        <td>{user.job || "-"}</td>
                                        <td>{user.status === "1" ? "Actif" : "Inactif"}</td>
                                        <td colSpan={3}>Aucun salaire</td>
                                    </tr>
                                )
                            }

                            const totalSalaire = userSalaires.reduce(
                                (sum, s) => sum + parseFloat(s.amount),
                                0
                            )

                            const totalPaye = userSalaires.reduce((sum, s) => {
                                const paye = paiement
                                    .filter(p => p.fk_salary === String(s.id))
                                    .reduce((a, p) => a + parseFloat(p.amount), 0)

                                return sum + paye
                            }, 0)

                            const restant = totalSalaire - totalPaye

                            return (
                                <tr key={user.id}>
                                    <td>
                                        <img
                                            src={getPhotoUrl(user)}
                                            width={50}
                                            height={50}
                                            alt={user.lastname}
                                        />
                                    </td>

                                    <td>{user.lastname} {user.firstname}</td>
                                    <td>{user.login}</td>
                                    <td>{user.gender || "-"}</td>
                                    <td>{user.job || "-"}</td>
                                    <td>{user.status === "1" ? "Actif" : "Inactif"}</td>

                                    <td>{totalSalaire}</td>
                                    <td>{totalPaye}</td>
                                    <td>{restant}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className="actions-row">
                <button className="btn" onClick={() => navigate("/payer/salaire")}>Créer paiement salaire</button>
                <button className="btn btn-outline" onClick={() => navigate('/liste/salarier')}>Voir tous les salariés (sans filtres)</button>
            </div>

        </div>
    );
}

export default Salaries;