import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Link from 'next/link'


export default function TopicsLeftMenu (props) {
  const { loading, error, data } = useQuery(
    props.FIND_TOPICS_QUERY
  )

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  const { findTopics} = data
  const res = findTopics.topics

  return(
    <fragment>
      {res.map(({ id,name },index) => (
          <div id={id} key={id}>
            <Link href={{ pathname: '/videos', query: { id: id,topic: name } }}>
              <a>{name}</a>
            </Link>
          </div>
          ))}
      <style jsx>{`
        .col-right{
            float:right;
        }
        `}</style>
    </fragment>
  )
}
