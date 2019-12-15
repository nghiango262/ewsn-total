import React from 'react'

import Layout from "../layout/layout"
import TextInput from '../components/TextInput';
import TextInputArea from '../components/TextInputArea';
import FormContact from '../components/FormContact';

const Contact = () => (
    <Layout>
        <div className="main-contact">
            <div className="full-width-image full-width-color main-2 contact_image">
                    <div className="row">
                        <img src="https://dpplus.com/images/pencil-with-pencil-shavings.jpg" alt className="full_image" />
                    </div>
                </div>
            <div className="contact_title"><h2><strong>Liên hệ</strong></h2></div>
            <div className="content_1">
                <div className="head_title_1">
                    <h2>Let us create positive change for your business.</h2>
                </div>
                <div className="head_1">
                    <div className="sec_1">
                        <h3>Adam Wilson</h3>
                        <p>EVP, Marketing</p>
                    </div>
                    <div className="sec_1">
                        <h4>Website</h4>
                        <a href="https://ewsn.vn">https://ewsn.vn</a>
                    </div>
                    <div className="sec_1">
                        <h4>Số điện thoại</h4>
                        <p>097837483882</p>
                    </div>
                    <div className="sec_1">
                        <h4>Email</h4>
                        <p>contact@ewsn.vn</p>
                    </div>
                </div>
            </div>
            

            <div className="contact_2">
                <FormContact />
            </div>

            <div className="contact_3">
                <div class="full-width-color main-1 bottom-spacer double find_us">
                    <div class="row">
                        <h2>Where to Find Us</h2>
                    </div>
                </div>

                <div className="bottom-spacer locations">
                    <div className="row no-padd overlay-above">
                        <div className="location hq overlay-above-half">
                        <img src="https://dpplus.com/images/FH-building-1440.jpg" alt />
                        <h3>Headquarters</h3>
                        <h4>Farmington Hills</h4>
                        <div className="address">
                            <a target="_new" href="https://www.google.com/maps/place/Duffey+Petrosky/@42.4964771,-83.4279446,17z/data=!3m1!4b1!4m5!3m4!1s0x8824afde92d1e311:0xe4f85216a6f41978!8m2!3d42.4964732!4d-83.4257559">
                            38505 Country Club Drive, Suite 110,
                            <br />
                            Farmington Hills, MI 48331
                            </a>
                        </div>
                        <div className="telephone">
                            <a href="tel:12484898300">248.489.8300</a>
                        </div>
                        </div>
                    </div>
                </div>
	        </div>

        </div>

        
    </Layout>
)

export default Contact;