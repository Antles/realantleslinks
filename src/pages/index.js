import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTwitch, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'


import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Links To All The Fun</h1>
    <ul>
      <li>
        <div>
          <FontAwesomeIcon icon={faTwitch} />
          {/*<Link to="https://www.twitch.tv/realantles">Twitch</Link>*/}
        </div>
      </li>
      <li>
        <div>
          <FontAwesomeIcon icon={faYoutube} />
          {/*<Link to="https://www.twitch.tv/realantles">Twitch</Link>*/}
        </div>
      </li>
      <li>
        <div>
          <FontAwesomeIcon icon={faTiktok} />
          {/*<Link to="https://www.twitch.tv/realantles">Twitch</Link>*/}
        </div>
      </li>
      <li>
        <div>
          <FontAwesomeIcon icon={faTwitter} />
          {/*<Link to="https://www.twitch.tv/realantles">Twitch</Link>*/}
        </div>
      </li>
    </ul>
  </Layout>
)

export default IndexPage

      
      
      