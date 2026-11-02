import './Blogs.css'

function Blogs() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-header__title">Blogs</h1>
          <p className="page-header__subtitle">
            Insights, updates, and thoughts from the ASVA Innovation Lab team.
          </p>
        </div>

        <div className="blogs-content">
          <p className="blogs-content__text">
            Blog posts will be published here. Stay tuned for updates on technology, innovation, and our work at ASVA Innovation Lab.
          </p>
          <p className="blogs-content__text">
            For inquiries, reach out at{' '}
            <a href="mailto:info@asva.com.np" className="blogs-email">info@asva.com.np</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blogs

