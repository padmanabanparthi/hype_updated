import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Link from 'next/link'
import LoadingMessage from '../components/common/LoadingMessage'
import ErrorMessage from '../components/common/ErrorMessage'

export const GET_CATEGORIES  = gql`
{
    findIndustrySectors{
      industrySectors {
        id
        name
      }
      errors
    }
  }
`
export default function FooterCategories () {

  const { loading, error, data } = useQuery(
    GET_CATEGORIES
  )

  if (loading) return <LoadingMessage message="loading..."/>;
  if (error) return <ErrorMessage message="Error :("/>;

  const { findIndustrySectors} = data

  return (
    <fragment>
      <ul className="nav flex-column">
        {findIndustrySectors.industrySectors.map(function({ id, name}, index){
          if (index<5) {
            return <li className="footerli" key={id}><Link href="/categories"><a className="flinks">{name}</a></Link></li>;
          }
            
        })}
      </ul>
      <style jsx>{`
      .flinks {
            color: #314559 !important;
            font-size:14px;
        }
      `}
      </style>
    </fragment>
  )
}