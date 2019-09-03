import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import DisplayStories from '../common/DisplayStories'

export const GET_TOPSTORIES  = gql`
{
    findHomes(topicsPage: 1 , productsPage: 1, storiesPage: 1, storesPage: 2, industrySectorsPage: 1,retailersPage:1) {
      topStories {
        title,
        bannerUrls,videoUrls,videoUrlsGroup,
        viewsCount,dislikesCount,likesCount,commentsCount,sharesCount,        
        customer{
          firstName
        }
      }
    }
}
`

export default function HomeTopStoriesVideos () {
  const { loading, error, data } = useQuery(
    GET_TOPSTORIES
  )

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  const { findHomes } = data
  const stories = findHomes.topStories
  return(
    <fragment>
      <div className="row">
        
        <DisplayStories findstories={stories}/>
      </div>
    </fragment>
  )
}

