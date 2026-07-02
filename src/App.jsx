import { Routes, Route } from 'react-router-dom'
import LoginAdmin from './page/admin/login'
import AcceuilAdmin from './page/admin/acceuil'
import ImportData from './page/admin/util/import'
import ListeSalaire from './page/admin/salaire/liste'
import Salaries from './page/frontoffice/salaries/liste'
import PayerSalaire from './page/frontoffice/salaries/create/payer'
import CreateFerier from './page/admin/ferier/create'
import ListeFerier from './page/admin/ferier/liste'
import UpdateFerier from './page/admin/ferier/update'
import MultiPaiement from './page/frontoffice/salaries/create/multi_payement'
import ListeSalarier from './page/frontoffice/salaries/create/listeSalarier'
import SalarierDetail from './page/frontoffice/salaries/create/detailSalarier'


function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Salaries />} />
          <Route path="/admin" element={<LoginAdmin />} />
          <Route path="/admin/acceuil" element={<AcceuilAdmin />} />
          <Route path="/admin/import" element={<ImportData />} />
          <Route path="/salaire" element={<ListeSalaire />} />
          <Route path="/salarier" element={<Salaries />} />
          <Route path="/creer/ferier"element={<CreateFerier/>}/>
          <Route path="/liste/ferier"element={<ListeFerier />}/>
          <Route path="/payer/salaire"element={<PayerSalaire />}/>
          <Route path="/update/ferier/:id"element={<UpdateFerier />}/>
          <Route path="/payer/all"element={<MultiPaiement />}/>
          <Route path="/liste/salarier"element={<ListeSalarier />}/>
          <Route path="/salarier/:id"element={<SalarierDetail />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
