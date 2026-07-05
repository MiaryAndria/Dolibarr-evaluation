import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/global.css'
import '../styles/navbar.css'

const ADMIN_PATHS = ['/admin', '/salaire', '/creer/ferier', '/liste/ferier', '/update/ferier']

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
    </svg>
)

const LayoutDashboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
    </svg>
)

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link'
    const isAdminArea = ADMIN_PATHS.some(p => location.pathname.startsWith(p))

    return (
        <nav className="navbar">
            <span className="navbar-brand" onClick={() => navigate('/')}>ETU3530</span>

            <div className="navbar-links">
                {isAdminArea ? (
                    <>
                        <button className={isActive('/admin/acceuil')} onClick={() => navigate('/admin/acceuil')}>Dashboard</button>
                        <button className={isActive('/admin/import')} onClick={() => navigate('/admin/import')}>Import CSV</button>
                        <button className={isActive('/salaire')} onClick={() => navigate('/salaire')}>Salaires globaux</button>
                        <button className={isActive('/liste/ferier')} onClick={() => navigate('/liste/ferier')}>Jours fériés</button>
                        <button className={isActive('/creer/ferier')} onClick={() => navigate('/creer/ferier')}>Créer Férié</button>
                    </>
                ) : (
                    <>
                        <button className={location.pathname === '/' || location.pathname === '/salarier' ? 'nav-link active' : 'nav-link'} onClick={() => navigate('/salarier')}>Salariés</button>
                        <button className={isActive('/liste/salarier')} onClick={() => navigate('/liste/salarier')}>Employés</button>
                        <button className={isActive('/payer/salaire')} onClick={() => navigate('/payer/salaire')}>Payer un salaire</button>
                        <button className={isActive('/payer/all')} onClick={() => navigate('/payer/all')}>Paiement multiple</button>
                    </>
                )}
            </div>

            <div className="navbar-end">
                {!isAdminArea ? (
                    <button className="nav-link" onClick={() => navigate('/admin')}>
                        Admin <ArrowRightIcon />
                    </button>
                ) : (
                    <button className="nav-link" onClick={() => navigate('/')}>
                        <LayoutDashboardIcon /> Frontoffice
                    </button>
                )}
            </div>
        </nav>
    )
}

export default Navbar
