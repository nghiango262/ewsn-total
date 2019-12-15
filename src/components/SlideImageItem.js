import React, { Component } from 'react'

export default class SlideImageItem extends Component {
    render() {
        return (
            <div className="slide">
                <div className="slide__bg" />
                <div className="slide__content">
                    <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                        <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                    </svg>
                    <div className="slide__text">
                        <h2 className="slide__text-heading" style={{fontFamily: '"Open Sans Condensed", sans-serif'}}>Big Data. Realtime Insight.</h2>
                        <p className="slide__text-desc" style={{fontFamily: '"Open Sans Condensed", sans-serif'}}> Content is automatically generated, sales emails, customer retention emails, and custom landing pages are generated based on site content using natural language processing to create relevant marketing content and distribute it across multiple channels.</p>
                        <a className="slide__text-link" style={{fontFamily: '"Open Sans Condensed", sans-serif'}}>Learn More</a>
                    </div>
                </div>
            </div>

        )
    }
}
