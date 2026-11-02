import './Contact.css'

function Contact() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-header__title">Contact</h1>
          <p className="page-header__subtitle">
            Have an inquiry or interested in collaborating with ASVA Innovation Lab? We would be glad to hear from you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-block">
            <h2 className="contact-block__label">General Inquiries & Partnerships</h2>
            <a href="mailto:info@asva.com.np" className="contact-block__email">
              info@asva.com.np
            </a>
          </div>

          <div className="contact-block">
            <h2 className="contact-block__label">Company</h2>
            <p className="contact-block__text">ASVA Innovation Lab Pvt. Ltd.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

