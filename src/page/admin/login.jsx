import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import "../../styles/login.css"

function LoginAdmin() {
   const name = 'admin'
   const pwd = 'admin123'
   const [nom,setNom] = useState('');
   const [mdp,setMdp] = useState('');
   const navigate = useNavigate()

    const login = () => {
        if (nom === name && mdp === pwd) {
            navigate('/admin/acceuil');
        }
    }
    
   return (
    <div className="login-page">
      <div className="login-box">
        <h2 className="login-title">Admin Login</h2>
        <div className="login-fields">
          <p>Entrer votre identifiant</p><input className="field-input" type="text" onChange={(e)=>setNom(e.target.value)} placeholder={name} />
          <p>Entrer votre mot de passe</p><input className="field-input" type="password" onChange={(e)=>setMdp(e.target.value)} placeholder={pwd}/>
          <button className="btn login-btn" onClick={login}>Se connecter</button>
        </div>
      </div>
    </div>
   )
}
export default LoginAdmin
