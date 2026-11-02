import './Services.css'

/*
 * Service placeholders - easily editable for future services
 */
const SERVICES = [
  {
    id: 1,
    title: 'Digital Solutions & Development',
    description: 'Custom software development and modern digital solutions tailored to organizational requirements.',
  },
  {
    id: 2,
    title: 'Technology & IT Consulting',
    description: 'Strategic technical guidance, system architecture design, and digital transformation consulting.',
  },
  {
    id: 3,
    title: 'Innovation & Research',
    description: 'Exploration and implementation of emerging technologies to build scalable, forward-looking products.',
  },
]

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            A look at our core areas of focus. These services are continually expanding as our lab develops new capabilities.
          </p>
        </div>

        <div className="services__list">
          {SERVICES.map((service) => (
            <div key={service.id} className="services__item">
              <span className="services__number">0{service.id}</span>
              <h3 className="services__item-title">{service.title}</h3>
              <p className="services__item-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
