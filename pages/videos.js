import { withApollo } from '../lib/apollo';
import Fade from 'react-reveal/Fade';
import gql from 'graphql-tag'
import { useRouter } from 'next/router';

import App from '../components/App';
import Header from '../components/Header';
import Footer from '../components/Footer';

import TopStoriesVideos from '../components/videos/TopStoriesVideos';
import TopicsLeftMenu from '../components/videos/TopicsLeftMenu';

function StoriesPage(props) {
  const router = useRouter();
  if(router.query.id){
    var findStoriesQueryVars = {
      country: "US",
      topicid: router.query.id,
      variantIds: null
    }
  }
  else{
    var findStoriesQueryVars = {
      country: "US",
      topicid: [],
      variantIds: null
    }
  }

  if(router.query.topic){
    var topicname = "Inspirations for "+router.query.topic;
  }
  else{
    var topicname = "All Inspirations Just for You";
  }
  // topicid: ["5c79139fe0d3ed32457f75f4"],
  
  return (
    <App title='Stories'>
      <Header />
      <section className="stories-section">
        <div className="container section">
          <div className="row">
            <div className="col-md-2 left-menu-container">
            <TopicsLeftMenu FIND_TOPICS_QUERY={FIND_TOPICS_QUERY}/>
            </div>
            <div className="col-md-10 stories-result">
              <TitleSection title={topicname} desc="Watch and shop what you like instantly"/>
              <TopStoriesVideos FIND_STORIES_QUERY={FIND_STORIES_QUERY} findStoriesQueryVars={findStoriesQueryVars}/>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      <style jsx>{`
        .left-menu-container{
          background: #fff;
          padding-top:30px;
        }
        .stories-result{
            background: #f1f1f1;
            padding-top:30px;
        }
      `}</style>
    </App>
  );
}


export default withApollo(StoriesPage)

export const FIND_TOPICS_QUERY = gql`
{
  findTopics(customerId: null) {
    topics {
      id
      name
      imageUrl
      imageUrlSelected
    }
    errors
    status
  }
}
`

export const FIND_STORIES_QUERY = gql`
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


function TitleSection(props){
  return(
    <div className="row">
      <div className="col-md-12 text-center">
          <Fade bottom>
              <h1 className="video-page-title">{props.title}</h1>
              <p>{props.desc}</p>
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


