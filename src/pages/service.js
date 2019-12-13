import React from 'react'

import Layout from "../layout/layout"
import ServiceCard from '../components/ServiceCard'

import {service} from '../data/data.json'

function style(link) {
    return `url(${link})`
}
const Service = () => (
    <Layout>
    <div className="main_service">
        <div className="full-width-image" style={{backgroundImage: style('https://dpplus.com/images/services-hero.jpg')}}>
        
        </div>
        <div class="rowf">
			<h2>Areas of Focus</h2>
		</div>
        <ul>
            <li>
                {service.map(ser =>{
                    return (
                        
                        <ServiceCard
                            id={ser.id}
                            title={ser.title}
                            description={ser.description}
                            image={ser.image}
                        />
                        
                    )
                })}
            </li>
        </ul>
    </div>
    </Layout>
)

export default Service;