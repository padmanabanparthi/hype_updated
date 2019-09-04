import { useQuery } from '@apollo/react-hooks'
import Link from 'next/link'
import Fade from 'react-reveal/Fade';

export default function TopicsLeftMenu (props) {
  const { loading, error, data } = useQuery(
    props.FIND_TOPICS_QUERY
  )

  if (loading) return <p>...</p>;
  if (error) return <p>Error :(</p>;
  
  const { findTopics} = data
  const res = findTopics.topics

  return(
    <div>
      <div className="topstories-logo text-center">
      <Link href="/"><a className="navbar-brand"><img src="/static/logo.png" alt="Hype" /></a></Link>
      </div>
      <div className="topstories-menus">
        <ul>
          {res.map(({ id,name,imageUrl },index) => (
            <Fade>
              <li id={id} key={id}>
                <Link href={{ pathname: '/videos', query: { id: id,topic: name } }}>
                  <a><img src={imageUrl} /> <span className="leftmenu-span">{name}</span></a>
                </Link>
              </li>
            </Fade>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .navbar-brand {
          margin-right: 0rem;
        }
        .topstories-menus{
          width:200px;
          padding-top:40px;
        }
        .topstories-menus li{
          list-style-type: none;
          padding:8px 30px;
        }
        .topstories-menus ul{
          padding:0px
        }
        .topstories-menus li a{
          font-size:14px;
          color: rgba(0,0,0,.84) !important;
        }
        .topstories-menus li a img{
          width:35px;
          padding-right:20px;
        }
        .topstories-menus li a:hover, .topstories-menus li a.active{
          font-size:14px;
          color: #E5397D !important;
          text-decoration:none;
        }
        
        .topstories-logo img {
          width: 90px;
        }
        .col-right{
          float:right;
        }
      `}</style>
    </div>
  )
}
