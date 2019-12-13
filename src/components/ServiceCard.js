import React, { Component } from 'react'
import PropTypes from "prop-types"

import data from '../data/data.json'
export default class ServiceCard extends Component {

    style(link) {
        return `url(${link})`
    }
    render() {
        let {id,title, description,image} = this.props;
        console.log(`props: ===== : ${JSON.stringify(this.props)}`)
        
        if (id%2==0)
            return (
                <div className="serv">
                <div className="image_point" style={{backgroundImage: this.style(image)}}>
                    <div className="row">
                        <div className="image show_tablet">
                        </div>
                        <div className="item">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        </div>
                    </div>
                </div>
                </div>
            )
        else
            return (
                <div className="serv">
                    <div className="image_point_1" style={{backgroundImage: this.style(image)}}>
                    <div className="row_1">
                        <div className="image show_tablet">
                        </div>
                        <div className="item_1">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        </div>
                    </div>
                </div>
                </div>
                
            )
            

        
    }
}

ServiceCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
}


ServiceCard.defaultProps = {
    id: 1,
    title: "Dịch vụ AVC",
    description: "",
    image: "https://dpplus.com/images/services-multi-platform.jpg"
}
