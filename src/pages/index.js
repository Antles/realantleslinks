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
        <div className='linkContainer'>
          <FontAwesomeIcon icon={faTwitch} className='icon' />
          <Link to="https://www.twitch.tv/realantles" className='link'>Twitch</Link>
        </div>
      </li>
      <li>
        <div className='linkContainer'>
          <FontAwesomeIcon icon={faYoutube} className='icon' />
          <Link to="https://www.youtube.com/channel/UC2S2m5fhKWZbdf6uNravbTg" className='link'>YouTube</Link>
        </div>
      </li>
      <li>
        <div className='linkContainer'>
          <FontAwesomeIcon icon={faTiktok} className='icon' />
          <Link to="https://www.tiktok.com/@realantles?" className='link'>TikTok</Link> 
        </div>
      </li>
      <li>
        <div className='linkContainer'>
          <FontAwesomeIcon icon={faTwitter} className='icon' />
          <Link to="https://twitter.com/RealAntles" className='link'>Twitter</Link>
        </div>
      </li>
    </ul>
  </Layout>
)

export default IndexPage

      
      
      