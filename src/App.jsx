import { Routes, Route } from 'react-router-dom'
import LoginAdmin from './page/admin/login'
import AcceuilAdmin from './page/admin/acceuil'
import ImportData from './page/admin/util/import'
import ListeSalaire from './page/admin/salaire/liste'
import Salaries from './page/frontoffice/salaries/liste'
import PayerSalaire from './page/frontoffice/salaries/create/payer'

function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Salaries/>} />
          <Route path="/admin" element={<LoginAdmin/>} />
          <Route path="/admin/acceuil" element={<AcceuilAdmin/>} />
          <Route path="/admin/import" element={<ImportData/>} />
          <Route path="/salaire" element={<ListeSalaire/>} />
          <Route path="/salarier" element={<Salaries/>} />
          <Route path="/payer/salaire" element={<PayerSalaire/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
