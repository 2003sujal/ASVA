import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">ASVA Innovation Lab</h1>
          <p className="hero__subtitle">
            A technology-driven company focused on innovation, digital solutions, and crafting dependable modern products.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <Link to="/services" className="hero__link">Our Services →</Link>
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="container">
          <div className="home-about__content">
            <h2 className="home-about__title">Who We Are</h2>
            <p className="home-about__text">
              ASVA Innovation Lab Pvt. Ltd. is a modern technology company established to deliver dependable software, digital products, and innovative technology solutions. We bridge the gap between emerging technology and real-world business needs.
            </p>
            <Link to="/about" className="home-about__link">Learn more about us →</Link>
          </div>
        </div>
      </section>

      <section className="home-services">
        <div className="container">
          <h2 className="home-services__title">What We Do</h2>
          <div className="home-services__grid">
            <div className="home-services__item">
              <h3>Digital Solutions & Development</h3>
              <p>Custom software development and modern digital solutions tailored to organizational requirements.</p>
            </div>
            <div className="home-services__item">
              <h3>Technology & IT Consulting</h3>
              <p>Strategic technical guidance, system architecture design, and digital transformation consulting.</p>
            </div>
            <div className="home-services__item">
              <h3>Innovation & Research</h3>
              <p>Exploration and implementation of emerging technologies to build scalable, forward-looking products.</p>
            </div>
          </div>
          <Link to="/services" className="home-services__link">View all services →</Link>
        </div>
      </section>

      <section className="home-contact">
        <div className="container">
          <h2 className="home-contact__title">Get in Touch</h2>
          <p className="home-contact__text">
            Have an inquiry or interested in collaborating? We would be glad to hear from you.
          </p>
          <a href="mailto:info@asva.com.np" className="home-contact__email">info@asva.com.np</a>
        </div>
      </section>
    </div>
  )
}

export default Home

