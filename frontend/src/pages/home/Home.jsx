import Categories from "../../components/Categories"
import FAQs from "../../components/FAQs"
import Footer from "../../components/Footer"
import MainHeader from "../../components/MainHeader"
import PopularCourse from "../../components/PopularCourse"
import Testimonials from "../../components/Testimonials"
import "./home.css"

function Home() {
  return (
    <>
    <MainHeader/>
    <Categories/>
    <PopularCourse/>
    <FAQs/>
    <Testimonials/>
   
    </>
  )
}

export default Home