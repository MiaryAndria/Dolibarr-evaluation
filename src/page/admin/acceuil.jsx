import { useEffect, useState } from "react"
import Reset from "./util/reset"
import { useNavigate } from "react-router-dom"
function AcceuilAdmin() {
    const navigate = useNavigate()
return(
    <div>
        <p>Bienvenue dans page admin</p>
        <button onClick={()=>navigate('/admin/import')}>Faire import</button>
        <button onClick={()=>navigate('/salaire')}>Dashboard salaire</button>
        <Reset/>
    </div>
)
}
export default AcceuilAdmin
