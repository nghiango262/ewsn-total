import React, { Component } from 'react'

import "../../styles/components/_form_contact.scss";

export default class FormContact extends Component {

    render() {

        return (
            <div className="form-contact">
                <h4>Or if you’re feeling shy, feel free to fill out the form below and we’ll get back to you quickly.</h4>
                <form>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="form-group">
                            <label htmlFor="inputName1">Tên</label>
                            <input type="text" name="name" className="form-control" id="inputName1" placeholder="Họ tên" />
                            </div>
                            <div className="form-group">
                            <label htmlFor="inputPhone2">Số điện thoại</label>
                            <input type="text" name="phone" className="form-control" id="inputName2" placeholder="Số điện thoại" />
                            </div>                  
                            <div className="form-group">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            {/* <div className="form-group">
                                <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Dịch vụ</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option selected>Lựa chọn...</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                            </div> */}
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column">
                            <div className="form-group flex-grow-1 d-flex flex-column">
                                <label htmlFor="exampleFormControlTextarea1">Nội dung tin nhắn</label>
                                <textarea className="form-control flex-grow-1" name="message" id="exampleFormControlTextarea1" rows={8} defaultValue={""} />
                            </div>
                        </div>   
                        <div className="col-sm-12">
                            <div className="button flex-grow-1 d-flex">
                                <input type="submit" value="Gửi"/>
                            </div>
                        </div>       
                    </div>
                </form>     
            </div>
        );

    }
}
