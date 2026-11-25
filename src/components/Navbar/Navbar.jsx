import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import './Navbar.css'

export function Navbar() {
    return (
        <header className="navbar">
            <Link to="/" className="navbar-logo">
                <p>Vibe Store</p>
                <p className="navbar-slogan">Seu estilo, todos os dias</p>
            </Link>


            <div className="navbar-centro">
                <form className="navbar-busca">
                    <input type="search" placeholder="Buscar produtos"/>
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
                <Link to="/favoritos" aria-label="Favoritos">
                    <FontAwesomeIcon icon={faHeart} />
                </Link>
                <Link to="/login" aria-label="Conta">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                <Link to="/carrinho" aria-label="Carrinho">
                    <FontAwesomeIcon icon={faCartShopping} />
                </Link>
            </div>
        </header>
    )
}