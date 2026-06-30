import { useState } from "react"
import api_node from "../../../api/api_node"

function Reset() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)

    const reset = async () => {
        if (!confirm('Êtes-vous sûr ? Cette action est irréversible.')) return
        setLoading(true)
        setMessage(null)
        try {
            const response = await api_node.delete('/api/reset/dolibarr')
            setMessage({ type: 'success', text: response.data.message })
        } catch (e) {
            setMessage({ type: 'error', text: `Erreur: ${e.response?.data?.error || e.message}` })
        }
        setLoading(false)
    }

    return (
        <div>
            <h3>Réinitialisation des données</h3>
            <p>Supprime tous les employés (sauf admin), salaires, paiements et images importés.</p>
            <button onClick={reset} disabled={loading}>
                {loading ? 'Suppression...' : 'Réinitialiser les données'}
            </button>
            {message && (
                <p style={{ color: message.type === 'success' ? 'green' : 'red' }}>
                    {message.text}
                </p>
            )}
        </div>
    )
}

export default Reset
