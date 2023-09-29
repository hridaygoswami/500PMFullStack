import React from 'react'

// components
import ContactContent from './MyComponents/ContactContent'
import Footer from './MyComponents/Footer'
import Navbar from './MyComponents/Navbar'

// importing css
import "./assets/css/bootstrap.min.css"
import "./assets/css/custom.css"
import "./assets/css/fontawesome.css"
import "./assets/css/fontawesome.min.css"
import "./assets/css/slick-theme.css"
import "./assets/css/slick-theme.min.css"
import './assets/css/slick.min.css'
import './assets/css/templatemo.css'
import './assets/css/templatemo.min.css'


export default function Contact() {
  return (
    <>
       <Navbar/>
       <ContactContent/>
       <Footer/> 
    </>
  )
}
