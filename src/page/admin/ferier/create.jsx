import { useState } from "react";
import api_sqlite from "../../../api/api_sqlite";

function CreateFerier() {
    const [libelle, setLibelle] = useState('');
    const [date, setDate] = useState('');

    const creerFerier = async () => {
        try {
            await api_sqlite.post('/api/ferier', {
                libelle,
                date
            });

            setLibelle('');
            setDate('');
            alert('Jour férié créé');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <input type="text" value={libelle} onChange={(e) => setLibelle(e.target.value)} placeholder="Entrer libellé"/>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            <button onClick={creerFerier}>
                Créer férié
            </button>
        </div>
    );
}

export default CreateFerier;