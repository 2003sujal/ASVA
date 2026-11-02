import './Careers.css'

function Careers() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-header__title">Careers</h1>
          <p className="page-header__subtitle">
            Join ASVA Innovation Lab and help build technology that makes a difference.
          </p>
        </div>

        <div className="careers-content">
          <div className="careers-section">
            <h2 className="careers-section__title">Working at ASVA</h2>
            <p className="careers-section__text">
              We are always looking for talented individuals who share our passion for technology and innovation. At ASVA Innovation Lab, you will work on meaningful projects in a collaborative and growth-oriented environment.
            </p>
          </div>

          <div className="careers-section">
            <h2 className="careers-section__title">Open Positions</h2>
            <p className="careers-section__text">
              There are no open positions at this time. Please check back later or reach out to us for general inquiries.
            </p>
          </div>

          <div className="careers-section">
            <h2 className="careers-section__title">Get in Touch</h2>
            <p className="careers-section__text">
              Interested in joining our team? Send us your inquiry at{' '}
              <a href="mailto:info@asva.com.np" className="careers-email">info@asva.com.np</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers

