import { Navbar } from '../Navbar/Navbar.jsx'
import { Footer } from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import './Layout.css'

export function Layout(){
    return(
        <div className="layout">
            <Navbar />
            <main className="layout-conteudo">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}