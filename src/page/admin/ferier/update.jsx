import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api_sqlite from "../../../api/api_sqlite";

function UpdateFerier() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [libelle, setLibelle] = useState('');
    const [date, setDate] = useState('');

    const getFerier = async () => {
        try {
            const response = await api_sqlite.get(`/api/ferier/${id}`);
            setLibelle(response.data.libelle);
            setDate(response.data.date);
        } catch (e) {
            console.log(e);
        }
    };

    const updateFerier = async () => {
        try {
            await api_sqlite.put(`/api/ferier/${id}`, {
                libelle,
                date
            });

            navigate('/liste/ferier');
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getFerier();
    }, []);

    return (
        <div>
            <h2>Modifier jour férié</h2>
            <input type="text"value={libelle}onChange={(e) => setLibelle(e.target.value)}placeholder="Libellé"/>
            <input type="date"value={date} onChange={(e) => setDate(e.target.value)}/>
            <button onClick={updateFerier}>Mettre à jour</button>
        </div>
    );
}

export default UpdateFerier;