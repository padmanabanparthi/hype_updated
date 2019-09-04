import { useQuery } from '@apollo/react-hooks'
import DisplayStories from '../common/DisplayStories'
import LoadingMessage from '../common/LoadingMessage'
import ErrorMessage from '../common/ErrorMessage'
import Fade from 'react-reveal/Fade';
import React from 'react';

function StoriesInfo(props){
  return(
    <React.Fragment>
      <div className="total-sortby-section">
        <div className="float-right">
          <Fade><span>{props.totposts} Items</span></Fade> | <Fade><span>Sort by: {props.sortby}</span></Fade>
        </div>
      </div>
      <style jsx>{`
      .videos-result{
        margin-top:50px;
      }
      .col-right{
          float:right;
      }
      .total-sortby-section{
        margin-bottom:40px;
      }
      `}</style>
    </React.Fragment>
  )
}

export default function TopStoriesVideo (props) {
  const { loading, error, data } = useQuery(
    props.FIND_STORIES_QUERY,
    {
      variables: props.findStoriesQueryVars,
    }
  )

  if (loading) return <LoadingMessage message="loading..."/>;
  if (error) return <ErrorMessage message="Error :("/>;
  
  const { findStories} = data
  const stories = findStories.stories
  const cpage = findStories.currentPage
  const tpage = findStories.totalPages
  const totposts = findStories.stories.length

  if(totposts){
    var totmsg = <StoriesInfo totposts={totposts} sortby="Most Popular"/>
  }
  else{
    var totmsg =""
  }

  return(
    <React.Fragment>
      <div className="row videos-result">
        <div className="col-md-12">
        {/* Total Posts: {totposts} , Current Page: {cpage} , Total Pages: {tpage} */}
          {totmsg}
        </div>
      </div>
      <div className="clearfix"></div>
      <DisplayStories findstories={stories}/>
      <style jsx>{`
        .videos-result{
          margin-top:50px;
        }
        .col-right{
            float:right;
        }
      `}</style>
    </React.Fragment>
  )
}

