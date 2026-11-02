import './Hero.css'

function Hero() {
  const handleContactClick = (e) => {
    e.preventDefault()
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">
            ASVA Innovation Lab
          </h1>
          <p className="hero__description">
            A technology-driven company focused on innovation, digital solutions, and crafting dependable modern products.
          </p>
          <div className="hero__action">
            <a
              href="#contact"
              className="btn-primary"
              id="hero-contact-btn"
              onClick={handleContactClick}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
