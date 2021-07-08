import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Links To All The Fun</h1>
    <ul>
      <li>
        <div>
          <FontAwesomeIcon icon={["fab","twitch"]} />
          <Link to="https://www.twitch.tv/realantles">Twitch</Link>
        </div>
      </li>
      <li>
        <div>
        <FontAwesomeIcon icon={["fab","youtube"]} />
          <Link to="https://www.youtube.com/channel/UC2S2m5fhKWZbdf6uNravbTg">YouTube</Link>
        </div>
      </li>
      <li>
        <div>
        <FontAwesomeIcon icon={["fab","tiktok"]} />
          <Link to="https://www.tiktok.com/@realantles?">TikTok</Link> 
        </div>
      </li>
      <li>
        <div>
        <FontAwesomeIcon icon={["fab","twitter"]} />
          <Link to="https://twitter.com/RealAntles">Twitter</Link>
        </div>
      </li>
    </ul>
  </Layout>
)

export default IndexPage

      
      
      