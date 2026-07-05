import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api_sqlite from "../../../api/api_sqlite";

import "../../../styles/ferier.css"

function UpdateFerier() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [libelle, setLibelle] = useState('');
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin,setDateFin] = useState('');

    const getFerierDetail = async () => {
        try {
            const response = await api_sqlite.get(`/api/ferier/${id}`);
            setLibelle(response.data.libelle);
            setDateDebut(response.data.date_debut);
            setDateFin(response.data.date_fin);

        } catch (e) {
            console.log(e);
        }
    };

    const updateFerier = async () => {
        try {
            await api_sqlite.put(`/api/ferier/${id}`, {
                libelle:libelle,
                date_debut:dateDebut,
                date_fin:dateFin
            });

            navigate('/liste/ferier');
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getFerierDetail();
    }, []);

    return (
        <div className="ferier-page">
            <h1 className="page-title">Modifier jour férié</h1>
            
            <div className="form-group mb-16">
                <label className="form-label">Libellé</label>
                <input className="field-input" type="text" value={libelle} onChange={(e) => setLibelle(e.target.value)} placeholder="Entrer libellé"/>
            </div>
            
            <div className="form-row mb-24">
                <div className="form-group flex-1">
                    <label className="form-label">Date début</label>
                    <input className="field-input" type="date" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} />
                </div>
                <div className="form-group flex-1">
                    <label className="form-label">Date fin</label>
                    <input className="field-input" type="date" value={dateFin} onChange={(e) => setDateFin(e.target.value)} />
                </div>
            </div>
            
            <button className="btn w-100" onClick={updateFerier}>Mettre à jour</button>
        </div>
    );
}

export default UpdateFerier;