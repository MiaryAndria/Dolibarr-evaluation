import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
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
    <div>
        <p>Entrer votre identifiant</p><input type="text" onChange={(e)=>setNom(e.target.value)} placeholder={name} />
        <p>Entrer votre mot de passe</p><input type="password" onChange={(e)=>setMdp(e.target.value)} placeholder={pwd}/>
        <p></p><button onClick={login}>Se connecter</button>
    </div>
   )
}
export default LoginAdmin
