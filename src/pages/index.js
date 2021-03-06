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
          <Link to="https://www.twitch.tv/realantles" className='link'>
            <div className='linkContainer'>
              <FontAwesomeIcon icon={faTwitch} className='icon' />
              Twitch
            </div> 
          </Link> 
      </li>
      <li>
          <Link to="https://www.youtube.com/channel/UC2S2m5fhKWZbdf6uNravbTg" className='link'>
            <div className='linkContainer'>
              <FontAwesomeIcon icon={faYoutube} className='icon' />
              Youtube
            </div> 
          </Link> 
      </li>
      <li>
          <Link to="https://www.tiktok.com/@realantles?" className='link'>
            <div className='linkContainer'>
              <FontAwesomeIcon icon={faTiktok} className='icon' />
              TikTok
            </div> 
          </Link> 
      </li>
      <li>
          <Link to="https://twitter.com/RealAntles" className='link'>
            <div className='linkContainer'>
              <FontAwesomeIcon icon={faTwitter} className='icon' />
              Twitter
            </div> 
          </Link> 
      </li>
    </ul>
  </Layout>
)

export default IndexPage

      
      
      