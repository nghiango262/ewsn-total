import React from "react"

import "../../styles/index.scss"
import Header from "./header"
import Footer from "./footer"

const items = [
  {
    id: 0,
    title: 'Trang chính',
    image: "https://steamstore-a.akamaihd.net/public/shared/images/responsive/header_logo.png",
    route: '/',
  },
  {
    id: 1,
    title: 'Về chúng tôi',
    image: null,
    route: '/about',
  },
  {
    id: 2,
    title: 'Dịch vụ',
    image: null,
    route: '/service',
  },
  {
    id:3,
    title: 'Tin tức',
    image: null,
    route: '/blog',
  },
  {
    id: 4,
    title: 'Liên Hệ',
    image: null,
    route: '/contact',
  },
]

const Layout = ( props) => {
  return (
    <div>
      <Header siteTitle={items}/>
      {props.children}
      <Footer />
    </div>
  )
}
export default Layout
