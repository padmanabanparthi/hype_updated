import { withApollo } from '../lib/apollo';
import Fade from 'react-reveal/Fade';
import gql from 'graphql-tag'
import { useRouter } from 'next/router';

import App from '../components/App';
import HeaderForStories from '../components/HeaderForStories';
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
      <div className="">
          <div className="video-page-container">
            <div className="left-menu-container">
            <TopicsLeftMenu FIND_TOPICS_QUERY={FIND_TOPICS_QUERY}/>
            </div>
            <div className="stories-container">
              <HeaderForStories />
              <div className="stories-result">
                <TitleSection title={topicname} desc="Watch and shop what you like instantly"/>
                <div>
                    <TopStoriesVideos FIND_STORIES_QUERY={FIND_STORIES_QUERY} findStoriesQueryVars={findStoriesQueryVars}/>
                </div>
              </div>
              <Footer/>
            </div>
          </div>
      </div>
      <style jsx>{`
        .video-page-container{
          display:flex;
        }
        .left-menu-container{
          background: #fff;
          box-shadow:0px 4px 10px #dbd9d9;
          padding-top:4px;
        }
        .stories-container{
          background: #F4F6F8;
          width: 86%;
        }
        .stories-result{
            background: #F4F6F8;
            padding:60px 40px 0px 40px;
            min-height:300px;
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


