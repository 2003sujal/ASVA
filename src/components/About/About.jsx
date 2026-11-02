import './About.css'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about__wrapper">
          <div className="section-header">
            <h2 className="section-title">About ASVA Innovation Lab</h2>
            <p className="section-subtitle">
              Pioneering technology solutions with a focus on impact, reliability, and engineering excellence.
            </p>
          </div>

          <div className="about__content">
            <p className="about__paragraph">
              ASVA Innovation Lab Pvt. Ltd. is a modern technology company established to deliver dependable software, digital products, and innovative technology solutions. We bridge the gap between emerging technology and real-world business needs.
            </p>
            <p className="about__paragraph">
              Our lab focuses on research, design, and practical implementation — providing organizations with scalable and future-ready digital foundations. As we continue to expand our operations, our commitment remains grounded in engineering rigor, transparency, and collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
