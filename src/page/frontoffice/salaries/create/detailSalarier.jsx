import { useEffect, useState } from "react";
import api_service from "../../../../api/api_service";
import { useParams, useNavigate } from "react-router-dom";

import "../../../../styles/detail.css"

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
        <div className="detail-page">
            <h2 className="page-title">Information salarié</h2>

            <div className="table-wrapper mb-32">
            <table className="data-table">
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
            </div>

            <h2 className="page-title text-lg">Historique salaire et paiement</h2>
            <div className="flex-row flex-wrap gap-24 mb-32">
            
            <div className="flex-1 min-w-250">
            <h3 className="section-block-title">Historique salaire</h3>
            <div className="table-wrapper">
            <table className="data-table">
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
            </div>
            </div>

            <div className="flex-1 min-w-250">
            <h3 className="section-block-title">Historique paiement </h3>
            <div className="table-wrapper">
            <table className="data-table">
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
            </div>
            </div>
            
            </div>
            
            <div className="kpi-grid">
               <div className="kpi-card"><div className="kpi-label">Total Salaire</div><div className="kpi-value">{totalSalaire}</div></div>
               <div className="kpi-card"><div className="kpi-label">Total Payé</div><div className="kpi-value">{totalPaye}</div></div>
               <div className="kpi-card"><div className="kpi-label">Total Restant</div><div className={`kpi-value ${totalRestant > 0 ? "text-danger" : "text-success"}`}>{totalRestant}</div></div>
            </div>
        </div>
    );
}

export default SalarierDetail;