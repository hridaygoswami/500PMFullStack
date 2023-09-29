import Banner from './MyComponents/Banner'
import Footer from './MyComponents/Footer'
import IndexContent from './MyComponents/IndexContent'
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

function Index() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <IndexContent/>
      <Footer/>
    </>
  )
}

export default Index
