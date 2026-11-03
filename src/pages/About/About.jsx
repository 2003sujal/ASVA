import './About.css'

function About() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-header__title">About ASVA Innovation Lab</h1>
          <p className="page-header__subtitle">
            Pioneering technology solutions with a focus on impact, reliability, and engineering excellence.
          </p>
        </div>

        <div className="about-content">
          <div className="about-feature">
            <div className="about-section about-section--lead">
              <h2 className="about-section__title">Our Company</h2>
              <p className="about-section__text">
                ASVA Innovation Lab Pvt. Ltd. is a modern technology company established to deliver dependable software, digital products, and innovative technology solutions. We bridge the gap between emerging technology and real-world business needs.
              </p>
              <p className="about-section__text">
                Our lab focuses on research, design, and practical implementation — providing organizations with scalable and future-ready digital foundations. As we continue to expand our operations, our commitment remains grounded in engineering rigor, transparency, and collaboration.
              </p>
            </div>

            <div className="about-feature__media">
              <div className="media">
                <img
                  src="/images/about-team.jpg"
                  alt="Software engineers collaborating around a workstation"
                  width="1200"
                  height="800"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2 className="about-section__title">Our Approach</h2>
            <p className="about-section__text">
              We believe in building technology that is practical, maintainable, and aligned with real needs. Every project is approached with careful planning, clear communication, and a focus on long-term value.
            </p>
          </div>

          <div className="about-section">
            <h2 className="about-section__title">Get in Touch</h2>
            <p className="about-section__text">
              Want to learn more about ASVA Innovation Lab? Reach out to us at{' '}
              <a href="mailto:info@asva.com.np" className="about-email">info@asva.com.np</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
