import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderNavItem from "../components/HeaderNavItem"


const Header = ({ siteTitle }) => (
  <header className="main-header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-nav">
  
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
        <span className="navbar-toggler-icon" />
        
      </button>
      <div className="navbar-toggler collapsed">
        <h2>UQAA</h2>
      </div>

      <div className="navbar-collapse collapse" id="navbar10" style={{}}>
        <ul className="navbar-nav nav-fill w-100 nav-list">
        {siteTitle.map(page => {
          return (
            <HeaderNavItem 
              key={page.id}
              id={page.id}
              title={page.title}
              image={page.image}
              route={page.route}
            />
          )
        })}
        </ul>
      </div>
    </nav>

    {/* <div className="main-nav">
      <ul className="nav-list">
        {siteTitle.map(page => {
          return (
            <HeaderNavItem 
              key={page.id}
              id={page.id}
              title={page.title}
              image={page.image}
              route={page.route}
            />
          )
        })}
      </ul> 
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: null,
}

export default Header;
