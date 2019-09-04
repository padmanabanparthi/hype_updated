import Link from 'next/link'
import { withRouter } from 'next/router'


const HeaderForStories = ({ router: { pathname } }) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav category-header-section">
          <li className="nav-item active header-category-li">
            <Link href="/categories">
              <a className="nav-link header-category-link {pathname === '/categories' ? 'active' : ''}">
                <img src="/static/categoryicon.svg" />
                Categories
              </a>
            </Link>
          </li> 
          <li className="headersearch">
            <form>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search your favourite" aria-label="Search your favourite1" />
                <div className="input-group-append">
                  <button className="header-search-btn" type="button"><img src="/static/searchicon.svg" /></button>
                </div>
              </div>
            </form>
          </li>
        </ul>
        <div className="rightside-nav">
          <ul className="nav navbar-nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="#">Inspirations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sponsorships</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">How it Works?</a>
            </li>
            <li className="nav-item navbar-button-links">
            <button className="btn btn-sm btn-outline-secondary button-links signin" type="button">Sign in</button>
            <button className="btn btn-sm btn-outline-secondary button-links download-btn" type="button">Download App</button>
            </li>
          </ul>
          
        </div>
        
      </div>

    </nav>
    <style jsx>{`
      #navbarNav {
        margin: 16px 18px 16px 0px;
      }
      .navbar.navbar-expand-lg.navbar-light.bg-light {
        width: 100%;
        margin: 0 auto;
      }
     .active {
        color: #E5397D !important;
      }
    `}</style>
  </header>
)

export default withRouter(HeaderForStories)