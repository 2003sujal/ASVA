import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <Link to="/" className="footer__logo" aria-label="ASVA - Go to homepage">
              <img
                src="/asva-logo.png"
                alt="ASVA Innovation Lab"
                className="footer__logo-img"
                width="136"
                height="30"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="footer__right">
            <a href="mailto:info@asva.com.np" className="footer__link">
              info@asva.com.np
            </a>
            <Link to="/contact" className="footer__link">Contact</Link>
            <Link to="/careers" className="footer__link">Careers</Link>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; 2026 ASVA Innovation Lab Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
