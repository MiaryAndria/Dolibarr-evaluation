import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api_sqlite from "../../../api/api_sqlite";

import "../../../styles/ferier.css"

function ListeFerier() {
    const [ferier, setFerier] = useState([]);
    const navigate = useNavigate();

    const getFerier = async () => {
        try {
            const response = await api_sqlite.get('/api/ferier');
            setFerier(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    const deleteFerier = async (id) => {
        try {
            await api_sqlite.delete(`/delete/${id}`);
            await getFerier();
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getFerier();
    }, []);

    return (
        <div className="ferier-page">
            <div className="flex-row justify-between align-center mb-24">
                <h1 className="page-title" style={{margin: 0}}>Liste des jours fériés</h1>
                <button className="btn" onClick={()=>navigate('/creer/ferier')}>Ajouter jour férié</button>
            </div>

            <div className="kpi-grid">
            {ferier.map((f) => (
                <div key={f.id} className="kpi-card">
                    <h3 className="mb-8" style={{fontSize: "1.1rem"}}>{f.libelle}</h3>
                    <p className="text-muted-sm mb-16">{f.date}</p>
                    <div className="flex-row gap-8">
                        <button className="btn btn-outline btn-sm" onClick={() =>navigate(`/update/ferier/${f.id}`)}>Modifier</button>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteFerier(f.id)}>Supprimer</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default ListeFerier;