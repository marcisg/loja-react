import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-marca">
                <p className="footer-nome">Vibe Store</p>
                <p className="footer-slogan">Seu estilo, todos os dias.</p>
            </div>

            <div className="footer-links">
                <p className="footer-titulo">Categorias</p>
                <Link to="/categoria/roupas">Roupas</Link>
                <Link to="/categoria/calcados">Calçados</Link>
                <Link to="/categoria/acessorios">Acessórios</Link>
                <Link to="/promocoes">Promoções</Link>
            </div>

            <div className="footer-redes">
                <p className="footer-titulo">Redes sociais</p>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>

            <p className="footer-copy">© 2026 Vibe Store</p>
        </footer>
    )
}