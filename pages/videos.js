import { withApollo } from '../lib/apollo';
import App from '../components/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopStoriesVideos from '../components/videos/TopStoriesVideos';
import Fade from 'react-reveal/Fade';
import gql from 'graphql-tag'

const StoriesPage = props => (
  <App title='Stories'>
    <Header />
    <section className="stories-section">
      <div className="container section">
        <TitleSection title="Inspirations For Fitness Wearables"/>
        
        <TopStoriesVideos ALL_POSTS_QUERY={ALL_POSTS_QUERY} allPostsQueryVars={allPostsQueryVars}/>
      </div>
    </section>
    <Footer/>
    <style jsx>{`
      .stories-section{
          background: #ccc;
          padding-top:30px;
      }
    `}</style>
  </App>
)

export default withApollo(StoriesPage)

export const ALL_POSTS_QUERY = gql`
  query findStories($country: String!,$topicid :[String!]) {
    findStories(country: $country, topicIds: $topicid, variantIds: null) {
      stories {
          id, title, videoUrls, videoUrlsGroup, bannerUrls, viewsCount, dislikesCount, likesCount, commentsCount, sharesCount, images, description,
          customer {
            phone
          }
          topic {
            name
          }
          variants {
            name
          }
          storyLikers {
            id
          }
          storyDislikers {
            id
          }
          comments {
            description
            customer {
              firstName
            }
          }
        }
        errors
        currentPage
        totalPages
      }
    }
`

// topicid: ["5c79139fe0d3ed32457f75f4"],
export const allPostsQueryVars = {
  country: "US",
  topicid: [],
  variantIds: null
}


function TitleSection(props){
  return(
    <div className="row">
      <div className="col-md-12 text-center">
          <Fade bottom>
              <h1 className="video-page-title">{props.title}</h1>
              <p>Watch and shop instantly without ever leaving Hype</p>
          </Fade>
      </div>
      <style jsx>{`
        .video-page-title{
            color: rgba(0,0,0,.84) !important;
            margin-bottom: 4px;
            font-weight: bold;
            font-size: 30px;
        }
        `}</style>
    </div>
  )
}


