import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Links To All The Fun</h1>
    <ul>
      <li>
        <div>
          <i class="fab fa-twitch"></i>
          <Link to="https://www.twitch.tv/realantles">Twitch</Link>
        </div>
      </li>
      <li>
        <div>
        <i class="fab fa-youtube"></i>
          <Link to="https://www.youtube.com/channel/UC2S2m5fhKWZbdf6uNravbTg">YouTube</Link>
        </div>
      </li>
      <li>
        <div>
        <i class="fab fa-tiktok"></i>
          <Link to="https://www.tiktok.com/@realantles?">TikTok</Link> 
        </div>
      </li>
      <li>
        <div>
        <i class="fab fa-twitter"></i>
          <Link to="https://twitter.com/RealAntles">Twitter</Link>
        </div>
      </li>
    </ul>
  </Layout>
)

export default IndexPage

      
      
      