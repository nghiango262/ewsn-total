import React from 'react'

import Layout from "../layout/layout"
import SlideImageItem from '../components/SlideImageItem'
import PostView from '../components/PostView'

import {service} from '../data/data.json'

const Blog = () => (
    <Layout>
        {/* <SlideImageItem /> */}
        <ul>
            <li>
                {service.map(ser =>{
                    return (
                        
                        <PostView
                            id={ser.id}
                            title={ser.title}
                            description={ser.description}
                            image={ser.image}
                        />
                        
                    )
                })}
            </li>
        </ul>
    </Layout>
)

export default Blog;