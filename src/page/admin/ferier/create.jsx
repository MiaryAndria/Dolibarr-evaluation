import { useState } from "react";
import api_sqlite from "../../../api/api_sqlite";
import { useNavigate } from "react-router-dom";

import "../../../styles/ferier.css"

function CreateFerier() {
    const [libelle, setLibelle] = useState('');
    const [date,setDate] = useState('');
    const navigate = useNavigate();
    const creerFerier = async () => {
        try {
            await api_sqlite.post('/api/ferier', {
                libelle:libelle,
                date:date
            });
            navigate('/liste/ferier');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="ferier-page">
            <h1 className="page-title">Créer jour férié</h1>
            
            <div className="form-group mb-16">
                <label className="form-label">Libellé</label>
                <input className="field-input" type="text" value={libelle} onChange={(e) => setLibelle(e.target.value)} placeholder="Entrer libellé"/>
            </div>
            
            <div className="form-row mb-24">
                <div className="form-group flex-1">
                    <label className="form-label">Date </label>
                    <input className="field-input" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
            </div>
            
            <button className="btn w-100" onClick={creerFerier}>Créer férié</button>
        </div>
    );
}

export default CreateFerier;