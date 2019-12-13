import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const HeaderNavItem = (page) => {
    if (page.image!=null) {
        return (
            <Link to={`/${page.route}`}>
            <li className="nav_logo" key={page.id}>
                <div className="logo">
                    <img src={page.image} className="dark" />
                </div>
            </li>
            </Link>
        );
    } else {
        return (
            <Link to={`/${page.route}`}>
                <li className="list-item" key={page.id}><div>{page.title}</div></li>
            </Link>
            );
    }
}


HeaderNavItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    route: PropTypes.string,
}

HeaderNavItem.defaultProps = {
    id: 0,
    title: ``,
    image: null,
    route: null,
}

export default HeaderNavItem;