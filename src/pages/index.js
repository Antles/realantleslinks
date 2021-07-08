import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTwitch, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faTwitch, faTwitter, faYoutube, faTiktok)

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Links To All The Fun</h1>
    <ul>
      <li>
        <div>
          <FontAwesomeIcon icon='twitch' />
          <Link to="https://www.twitch.tv/realantles">Twitch</Link>
        </div>
      </li>
      <li>
        <div>
          <FontAwesomeIcon icon='youtube' />
          <Link to="https://www.youtube.com/channel/UC2S2m5fhKWZbdf6uNravbTg">YouTube</Link>
        </div>
      </li>
      <li>
        <div>
          <FontAwesomeIcon icon='tiktok' />
          <Link to="https://www.tiktok.com/@realantles?">TikTok</Link> 
        </div>
      </li>
      <li>
        <div>
          <FontAwesomeIcon icon='twitter' />
          <Link to="https://twitter.com/RealAntles">Twitter</Link>
        </div>
      </li>
    </ul>
  </Layout>
)

export default IndexPage

      
      
      