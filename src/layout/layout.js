/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import "../../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="active">
            <a href="/" className="nav_logo">
              <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fsteamstore-a.akamaihd.net%2Fpublic%2Fshared%2Fimages%2Fresponsive%2Fheader_logo.png&imgrefurl=https%3A%2F%2Fstore.steampowered.com%2Fapp%2F529180%2FDark_and_Light%2F&docid=t-g2dmMhpNNHbM&tbnid=wUaRCN9puGw2SM%3A&vet=10ahUKEwiphbLdrK3mAhUiyDgGHUexBTEQMwhmKBgwGA..i&w=744&h=171&bih=617&biw=1366&q=logo%20dark%20and%20light%20link&ved=0ahUKEwiphbLdrK3mAhUiyDgGHUexBTEQMwhmKBgwGA&iact=mrc&uact=8" className="dark" />
            </a>
          </li>
          <li className>
            <a href="/services">Services</a>
          </li>
          <li className>
            <a href="/expertise">Expertise</a>
          </li>
          <li className>
            <a href="/work">Work</a>
          </li>
          <li className>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* phan noi dung */}
      <div className="hero home full-width-video">
        <div className="row no-padd hide_play">
          <video autoPlay loop muted preload="auto" playsInline id="video1" className="inline_video" poster="data:image/jpeg;base64,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" data-video_mp4="../images/video.mp4">
            Your browser does not support HTML5 video.
            <source src="../images/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>


      {/* main 1 */}

      <div className="full-width-color main-1 plus_sign">
        <img className="sign" src="/images/plus-group.png" alt />
        <div className="row no-padd">
          <div className="home-agency">
            <h1>Agency of Change</h1>
            <p>
              We change opinions, perspectives, outcomes and how people experience brands. It’s never change for the sake of change. It’s for results. Impact. Efficiency. And enduring connections.  And in a post-advertising, experiential and digital world, we’re creating positive change for our clients.  Perhaps we can help you.
            </p>
          </div>
        </div>
      </div>

      {/* Layout main 2 */}

      <div className="main-2 services">
        <div className="row has_vertical_link overlay-above-one-quarter top-spacer bottom-spacer">
          <h2>Services</h2>
          <a href="services.html" className="vertical-link left">View All Services</a>
          <p><span>Advertising</span><span>Lead Generation</span></p>
          <p><span>Business Analytics</span><span>Digital</span></p>
          <p><span>Marketing SEM/Media</span><span>SEO/Content Creation</span></p>
        </div>
      </div>




    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
