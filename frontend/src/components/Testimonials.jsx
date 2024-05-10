import { useState } from "react"
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from "react-icons/im"
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io"
import { testimonials } from "../data"

const Testimonials = () => {
    const [index, setIndex] = useState(1)
    const {name, quote, job, avatar} =  testimonials[index];

    const prevTestimonialHandle = () => {
        setIndex(prev => prev - 1)
        if (index <= 0){
            setIndex(testimonials.length - 1)
        }
    }
    const nextTestimonialHandle = () => {
        setIndex(prev => prev + 1)

        if (index >= testimonials.length - 1){
            setIndex(0)
        }
    }

  return (
    <section className="testimonials">
        <div className="container testimonials_container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonial_head" />
            <Card className="testimonial">
                    <div >
                        <img src={avatar} alt={name} className="testimonial_avatar" />
                        <h5 className="testimonial_name">{name}</h5>
                    <small className="testimonial_title">{job}</small>
                    </div>
                    <p className="testimonial_quote">
                        {`"${quote}"`}
                    </p>
                    
            </Card>
            <div className="testimonials_btn-container">
                <button className="button testimonials_btn" onClick={prevTestimonialHandle}><IoIosArrowDropleftCircle/></button>
                <button className="button testimonials_btn" onClick={nextTestimonialHandle}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials