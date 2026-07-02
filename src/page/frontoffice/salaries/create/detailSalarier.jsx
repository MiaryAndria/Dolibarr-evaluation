import { useEffect, useState } from "react";
import api_service from "../../../../api/api_service";
import { useParams, useNavigate } from "react-router-dom";

function SalarierDetail() {
    const { id } = useParams();
    const [SalarierDetail, setSalarierDetail] = useState(null);
    const [salaire, setSalaire] = useState([]);
    const [paiement, setPaiement] = useState([]);
    const [userPaiement, setUserPaiement] = useState([]);
    const [totalPaye, setTotalPaye] = useState(0);

    const navigate = useNavigate();

    const baseUrl = api_service.defaults.baseURL.replace('/api/index.php/', '')

    const getPhotoUrl = (user) => {
        if (!user) return "";
        const numberPath = parseInt(user.id) - 1;
        return `${baseUrl}/viewimage.php?modulepart=userphoto&file=${user.id}/photos/${numberPath}.png`;
    };

    const getSalaires = async () => {
        try {
            const response = await api_service.get('salaries?sortfield=t.rowid&sortorder=ASC&limit=100')
            setSalaire(response.data)
        } catch (e) { console.log(e) }
    }

    const formatDate = (timestamp) => {
        if (!timestamp) return "-";

        return new Date(timestamp * 1000).toLocaleDateString("fr-FR");
    };

    const getPaiements = async () => {
        try {
            const response = await api_service.get('salaries/payments')
            setPaiement(response.data)
        } catch (e) { console.log(e) }
    }

    const UserSalaire = salaire.filter(s => String(s.fk_user) === String(id));
    const totalSalaire = UserSalaire.reduce(
        (sum, s) => sum + Number(s.amount),
        0
    );

    const findUserPaiement = async () => {
        const result = [];
        for (const u of UserSalaire) {
            for (const p of paiement) {
                if (String(p.fk_salary) === String(u.id)) {
                    result.push(p);
                }
            }
        }
        setUserPaiement(result);
    };

    const calculTotalPaye = async () => {
        try {
            const result = userPaiement.reduce(
                (sum, p) => sum + Number(p.amount), 
            0);
            setTotalPaye(result)
        } catch (e) {
            console.log(e)
        }
    }

    const totalRestant = totalSalaire - totalPaye;

    const getSalarierDetail = async (id) => {
        try {
            const response = await api_service.get(`users/${id}`);
            setSalarierDetail(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getSalarierDetail(id);
    }, [id]);

    useEffect(() => {
        getSalaires();
        getPaiements();
    }, []);

    useEffect(() => {
        findUserPaiement();
    }, [salaire, paiement]);

    useEffect(() => {
        calculTotalPaye();
    }, [userPaiement]);

    if (!SalarierDetail) {
        return <p>Chargement...</p>;
    }

    return (
        <div>
            <h2>Information salarié</h2>

            <table>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Nom</th>
                        <th>Genre</th>
                        <th>Poste</th>
                    </tr>
                </thead>

                <tbody>
                    <tr key={SalarierDetail.id}>
                        <td>
                            <img
                                src={getPhotoUrl(SalarierDetail)}
                                width={50}
                                height={50}
                                alt={SalarierDetail.lastname}
                            />
                        </td>
                        <td>{SalarierDetail.lastname} {SalarierDetail.firstname}</td>
                        <td>{SalarierDetail.gender}</td>
                        <td>{SalarierDetail.job}</td>
                    </tr>
                </tbody>
            </table>

            <h1>historique salaire et paiement</h1>
            <h2>historique salaire</h2>
            <table>
                <thead>
                    <tr>
                        <th>date</th>
                        <th>montant</th>
                    </tr>
                </thead>
                <tbody>
                    {UserSalaire.map(u => (
                        <tr key={u.id}>
                            <td>{formatDate(u.dateep)}</td>
                            <td>{u.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>historique paiement </h2>
            <table>
                <thead>
                    <tr>
                        <th>date</th>
                        <th>montant</th>
                    </tr>
                </thead>
                <tbody>
                    {userPaiement.map(u => (
                        <tr key={u.id}>
                            <td>{formatDate(u.datep)}</td>
                            <td>{u.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total Salaire :  {totalSalaire}</p>
            <p> Total Payé : {totalPaye}</p>
            <p> Total Restant : {totalRestant}</p>
        </div>
    );
}

export default SalarierDetail;