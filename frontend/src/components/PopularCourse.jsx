
import SectionHead from "./SectionHead"
import {programs} from "../data"
import Card from "../UI/Card"
import {Link} from "react-router-dom"



const Programs =() => {
  return (
    <section className="programs">
        <div className="container programs_container">
           <SectionHead title="Our Popular Programs"/>
      
        <div className="programs_wrapper">
            {
             programs.map(({id, image, title, info, path})=> {
                return (
                  <Card className="programs_program" key={id}>
                     <span>{image}</span>
                    <h4>{title}</h4>
                    <small>{info}</small>
                    <Link to={path} className="btn lg">Learn More</Link>

                  </Card>
                )
              })
            }
        <Link to='/programs' className="btn lg">View All Programs</Link>
        </div>
        </div>
    </section>
  )
}

export default Programs