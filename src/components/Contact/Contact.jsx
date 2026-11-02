import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact__wrapper">
          <div className="section-header">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">
              Have an inquiry or interested in collaborating with ASVA Innovation Lab? We would be glad to hear from you.
            </p>
          </div>

          <div className="contact__content">
            <p className="contact__label">General Inquiries &amp; Partnerships</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@asva.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__email"
              id="contact-email-link"
            >
              info@asva.com.np
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
