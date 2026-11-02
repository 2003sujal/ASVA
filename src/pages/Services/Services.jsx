import './Services.css'

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
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-header__title">Services</h1>
          <p className="page-header__subtitle">
            Our core areas of focus. These services are continually expanding as we develop new capabilities.
          </p>
        </div>

        <div className="services-list">
          {SERVICES.map((service) => (
            <div key={service.id} className="services-item">
              <span className="services-item__number">0{service.id}</span>
              <div className="services-item__content">
                <h2 className="services-item__title">{service.title}</h2>
                <p className="services-item__desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <p className="services-cta__text">
            Interested in working with us? Reach out at{' '}
            <a href="mailto:info@asva.com.np" className="services-cta__email">info@asva.com.np</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services

