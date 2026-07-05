import { useEffect, useState } from "react"
import Reset from "./util/reset"
import { useNavigate } from "react-router-dom"
import "../../styles/acceuil.css"

function AcceuilAdmin() {
    const navigate = useNavigate()
return(
    <div className="acceuil-page">
      <div className="acceuil-header">
        <h1>Bienvenue dans page admin</h1>
      </div>
      <div className="acceuil-actions">
        <button className="btn" onClick={()=>navigate('/admin/import')}>Faire import</button>
        <button className="btn" onClick={()=>navigate('/salaire')}>Dashboard salaire</button>
        <button className="btn" onClick={()=>navigate('/liste/ferier')}>Voir liste ferier</button>
      </div>
      <Reset/>
    </div>
)
}
export default AcceuilAdmin
