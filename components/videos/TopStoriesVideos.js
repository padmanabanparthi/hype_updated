import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import DisplayStories from '../common/DisplayStories'


export default function TopStoriesVideo (props) {
  const { loading, error, data } = useQuery(
    props.FIND_STORIES_QUERY,
    {
      variables: props.findStoriesQueryVars,
    }
  )

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">Error :(</p>;
  
  const { findStories} = data
  const stories = findStories.stories
  const cpage = findStories.currentPage
  const tpage = findStories.totalPages
  const totposts = findStories.stories.length

  if(totposts){
    var totmsg = <div className="float-right">{totposts} Items | Most Popular</div>
  }
  else{
    var totmsg =""
  }

  return(
    <fragment>
      <div className="row">
        <div className="col-md-12">
        {/* Total Posts: {totposts} , Current Page: {cpage} , Total Pages: {tpage} */}
        {totmsg}
        </div>
      </div>
      <div className="clearfix"></div>
      <DisplayStories findstories={stories}/>
      <style jsx>{`
        .col-right{
            float:right;
        }
        `}</style>
    </fragment>
  )
}
