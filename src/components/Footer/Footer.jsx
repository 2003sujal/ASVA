import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <p className="footer__copyright">
            &copy; 2026 ASVA Innovation Lab Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
        <div className="footer__right">
          <a href="mailto:info@asva.com.np" className="footer__link">
            info@asva.com.np
          </a>
          <span className="footer__divider">·</span>
          <Link to="/contact" className="footer__link">Contact</Link>
          <span className="footer__divider">·</span>
          <Link to="/careers" className="footer__link">Careers</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
