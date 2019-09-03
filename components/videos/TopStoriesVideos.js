import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import DisplayStories from '../common/DisplayStories'


export default function TopStoriesVideos (props) {
  const { loading, error, data } = useQuery(
    props.ALL_POSTS_QUERY,
    {
      variables: props.allPostsQueryVars,
    }
  )

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  const { findStories} = data
  const stories = findStories.stories
  const cpage = findStories.currentPage
  const tpage = findStories.totalPages
  const totposts = findStories.stories.length

  return(
    <fragment>
      <div className="row">
        <div className="col-md-12">
        {/* Total Posts: {totposts} , Current Page: {cpage} , Total Pages: {tpage} */}
        <div className="float-right">{totposts} Items | Most Popular</div>
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
