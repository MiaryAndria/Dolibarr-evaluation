import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api_sqlite from "../../../api/api_sqlite";

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
        <div>
            <button onClick={()=>navigate('/creer/ferier')}>Ajouter jour férié</button>
            <h2>Liste des jours fériés</h2>

            {ferier.map((f) => (
                <ul key={f.id}>
                    <li>{f.libelle}</li>
                    <p>{f.date}</p>
                    <button onClick={() =>navigate(`/update/ferier/${f.id}`)}> Modifier </button>
                    <button onClick={() => deleteFerier(f.id)}>Supprimer</button>
                </ul>
            ))}
        </div>
    );
}

export default ListeFerier;