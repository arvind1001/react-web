//flow
import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const DefaultLayout = (props) => {
  return (
      <div className="wrapper">
        {/* <Header  /> */}
        {props.children}
        <Footer />
      </div>
  )
}


export default DefaultLayout;