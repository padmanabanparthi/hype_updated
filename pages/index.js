import { withApollo } from '../lib/apollo';
import App from '../components/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slickcorousel from '../components/home/Slickcorousel';
import HomeTopStoriesVideos from '../components/home/HomeTopStoriesVideos';
import SupportedBy from '../components/home/SupportedBy';
import Fade from 'react-reveal/Fade';

const IndexPage = props => (
  <App title='Home Page'>
    <Header />
    <section className="home-main-section">
      <div className="container">
        <div className="row ">
          <div className="col-md-4 home-main-content">
          <Fade bottom>
            <h1 className="home-title">Shopping Inspirations <br/>From Real Customers</h1>
            </Fade>
            <Fade bottom>
            <p>Watch and shop instantly without leaving the website</p>
          </Fade>
          </div>
          <div className="col-md-8">
            <div className="vc-area">
              {/* <HeaderVideo/> */}
              <Slickcorousel/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="topstories-section">
      <div className="container section">
        <TitleSection title="Featured Experience"/>
        <HomeTopStoriesVideos/>
      </div>
    </section>

    <section className="supportby-section">
      <div className="container section">
        <TitleSection title="Supported By"/>
        <SupportedBy/>
      </div>
    </section>
    <Footer/>
  </App>
)

export default withApollo(IndexPage)