import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
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
import GenererSalaire from './page/frontoffice/salaries/create/generer_salaire'

function App() {
  const location = useLocation()
  const hideNavbar = ['/admin'].includes(location.pathname)

  return (
    <div className="app-container">
      {!hideNavbar && <Navbar />}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Salaries />} />
          <Route path="/admin" element={<LoginAdmin />} />
          <Route path="/admin/acceuil" element={<AcceuilAdmin />} />
          <Route path="/admin/import" element={<ImportData />} />
          <Route path="/salaire" element={<ListeSalaire />} />
          <Route path="/salarier" element={<Salaries />} />
          <Route path="/creer/ferier" element={<CreateFerier />} />
          <Route path="/liste/ferier" element={<ListeFerier />} />
          <Route path="/payer/salaire" element={<PayerSalaire />} />
          <Route path="/update/ferier/:id" element={<UpdateFerier />} />
          <Route path="/payer/all" element={<MultiPaiement />} />
          <Route path="/liste/salarier" element={<ListeSalarier />} />
          <Route path="/salarier/:id" element={<SalarierDetail />} />
          <Route path="/salaire/creer/special" element={<GenererSalaire />} />
        </Routes>
      </main>
    </div>
  )
}

export default App