import { Link } from 'react-router-dom'
import './Navbar.css'

export function Navbar() {
    return (
        <header className="navbar">
            <Link to="/" className="navbar-logo">Vibe Store</Link>

            <div className="navbar-centro">
                <form className="navbar-busca">
                    <input type="search" placeholder="Buscar produtos" />
                    <button type="submit">Buscar</button>
                </form>

                <nav>
                    <ul className="navbar-categorias">
                        <li><Link to="/categoria/roupas">Roupas</Link></li>
                        <li><Link to="/categoria/calcados">Calçados</Link></li>
                        <li><Link to="/categoria/acessorios">Acessórios</Link></li>
                        <li><Link to="/promocoes">Promoções</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="navbar-icones">
                <Link to="/favoritos">Favoritos</Link>
                <Link to="/login">Conta</Link>
                <Link to="/carrinho">Carrinho</Link>
            </div>
        </header>
    )
}