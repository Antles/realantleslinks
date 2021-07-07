import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Links to all the fun</h1>
    <p>
      <Link to="https://www.twitch.tv/realantles">Twitch</Link> <br />
      <Link to="https://www.youtube.com/channel/UC2S2m5fhKWZbdf6uNravbTg">YouTube</Link> <br />
      <Link to="https://www.tiktok.com/@realantles?">TikTok</Link> <br />
      <Link to="https://twitter.com/RealAntles">Twitter</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
