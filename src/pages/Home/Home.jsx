import { Link } from 'react-router-dom'
import './Home.css'

const HOME_SERVICES = [
  {
    title: 'Digital Solutions & Development',
    description:
      'Custom software development and modern digital solutions tailored to organizational requirements.',
    image: '/images/service-development.jpg',
    alt: 'Developer workstation with code editor open on a laptop and external monitor',
  },
  {
    title: 'Technology & IT Consulting',
    description:
      'Strategic technical guidance, system architecture design, and digital transformation consulting.',
    image: '/images/service-consulting.jpg',
    alt: 'Consultants collaborating around a strategy board during a planning session',
  },
  {
    title: 'Innovation & Research',
    description:
      'Exploration and implementation of emerging technologies to build scalable, forward-looking products.',
    image: '/images/service-research.jpg',
    alt: 'Engineer testing and prototyping hardware systems on a laboratory workbench',
  },
]

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">ASVA Innovation Lab</h1>
            <p className="hero__subtitle">
              A technology-driven company focused on innovation, digital solutions, and crafting dependable modern products.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn-primary">Contact Us</Link>
              <Link to="/services" className="btn-secondary">Our Services →</Link>
            </div>
          </div>

          <div className="hero__visual">
            <div className="media hero__media">
              <img
                src="/images/hero-office.jpg"
                alt="Software engineers working at modern workstations inside a bright technology office"
                width="1200"
                height="800"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="container home-about__grid">
          <div className="home-about__media">
            <div className="media">
              <img
                src="/images/about-team.jpg"
                alt="Engineering team reviewing code together at a workstation"
                width="1200"
                height="800"
                loading="lazy"
              />
            </div>
          </div>

          <div className="home-about__content">
            <h2 className="home-about__title">Who We Are</h2>
            <p className="home-about__text">
              ASVA Innovation Lab Pvt. Ltd. is a modern technology company established to deliver dependable software, digital products, and innovative technology solutions. We bridge the gap between emerging technology and real-world business needs.
            </p>
            <Link to="/about" className="text-link">Learn more about us →</Link>
          </div>
        </div>
      </section>

      <section className="home-services">
        <div className="container">
          <div className="home-services__header">
            <h2 className="home-services__title">What We Do</h2>
            <Link to="/services" className="text-link">View all services →</Link>
          </div>

          <div className="home-services__grid">
            {HOME_SERVICES.map((service) => (
              <article key={service.title} className="home-services__item">
                <div className="home-services__media">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width="900"
                    height="600"
                    loading="lazy"
                  />
                </div>
                <div className="home-services__body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact">
        <div className="container">
          <div className="cta-band home-contact__band">
            <div className="home-contact__content">
              <h2 className="home-contact__title">Get in Touch</h2>
              <p className="home-contact__text">
                Have an inquiry or interested in collaborating? We would be glad to hear from you.
              </p>
            </div>
            <div className="home-contact__actions">
              <a href="mailto:info@asva.com.np" className="btn-primary">
                info@asva.com.np
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
