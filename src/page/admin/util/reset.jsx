import { useState } from "react";
import api_node from "../../../api/api_node";
import api_sqlite from "../../../api/api_sqlite";

import "../../../styles/reset.css"

function Reset() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const resetDolibarr = async () => {
        return await api_node.delete('/api/reset/dolibarr');
    };

    const resetSqlite = async () => {
        return await api_sqlite.delete('/api/reset');
    };

    const reset = async () => {
        if (!window.confirm('Êtes-vous sûr ? Cette action est irréversible.')) {
            return;
        }

        setLoading(true);
        setMessage(null);

        try {
            const responseDolibarr = await resetDolibarr();
            const responseSqlite = await resetSqlite();

            setMessage({
                type: 'success',
                text:
                    responseDolibarr.data.message ||
                    responseSqlite.data.message ||
                    'Réinitialisation effectuée'
            });
        } catch (e) {
            setMessage({
                type: 'error',
                text: `Erreur : ${e.response?.data?.error || e.message}`
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="reset-widget">
            <button onClick={reset} disabled={loading}>
                {loading ? 'Suppression...' : 'Réinitialiser les données'}
            </button>

            {message && (
                <p style={{ color: message.type === 'success' ? 'green' : 'red' }}>
                    {message.text}
                </p>
            )}
        </div>
    );
}

export default Reset;