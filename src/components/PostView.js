import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class PostView extends Component {
    renderChan() {
        const {id, title, description, image} = this.props;
        return (
            
            <div>
                <div className="container post_main">
                    <div className={"post_left"}>
                        <img 
                            className="aligncenter" 
                            title="Cac phuong phap che bien ca phe nguyen ban" 
                            src={image}
                            alt="Cac phuong phap che bien ca phe PrimeCoffee" 
                        />
                    </div>
                    <div className="post_right">
                        <h2><strong>{title}</strong></h2>
                        <p style={{textAlign: 'justify'}}>
                        <span style={{fontSize: '11pt'}}>
                            {description}
                        </span>
                        </p>
                        <blockquote>
                            <span className="align-middle"> 
                                Xem thêm <a href="https://primecoffea.com/che-bien-kho-la-gi-qua-trinh-che-kho-ca-phe.html" target="_blank" rel="noopener">Phương pháp chế biến khô</a>
                            </span>
                        </blockquote>

                    </div>
                </div>
            </div>

        );
    }

    renderLe() {
        const {id, title, description, image} = this.props;
        return (
            
            <div>
                <div className="container post_main">
                    
                    <div className="post_right">
                        <h2><strong>{title}</strong></h2>
                        <p style={{textAlign: 'justify'}}>
                        <span style={{fontSize: '11pt'}}>
                            {description}
                        </span>
                        </p>
                        <blockquote>
                            <span className="align-middle"> 
                                Xem thêm <a href="https://primecoffea.com/che-bien-kho-la-gi-qua-trinh-che-kho-ca-phe.html" target="_blank" rel="noopener">Phương pháp chế biến khô</a>
                            </span>
                        </blockquote>

                    </div>
                    <div className={"post_left"}>
                        <img 
                            className="aligncenter" 
                            title="Cac phuong phap che bien ca phe nguyen ban" 
                            src={image}
                            alt="Cac phuong phap che bien ca phe PrimeCoffee" 
                        />
                    </div>
                </div>
            </div>

        );
    }

    render() {
        const {id, title, description, image} = this.props;
        console.log(`Props: ${JSON.stringify(this.props)}`)
        return (id%2==0?this.renderChan():this.renderLe());
    }
}

PostView.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
}

PostView.defaultProps = {
    id: 1,
    title: "Dịch vụ AVC",
    description: "",
    image: "https://dpplus.com/images/services-multi-platform.jpg"
}
