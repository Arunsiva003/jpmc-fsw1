import {BiBitcoin} from "react-icons/bi"
import {MdOutlineWebAsset} from "react-icons/md"
import {CgWebsite} from "react-icons/cg"
import {GrServerCluster} from "react-icons/gr"
import {AiOutlineAppstore} from "react-icons/ai"
import {TbBrandAirbnb, TbCSharp} from "react-icons/tb"
import {Link} from "react-router-dom"



const Categories = () => {
  return (
    <section class="categories">
    <div class="container categories_container">
        <div class="categories_left">
            <h1>Our Chapters</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo natus nemo culpa incidunt sapiente non, ipsum neque mollitia. Error assumenda itaque tenetur enim iste iure ipsa perspiciatis ad? Aspernatur, earum?
            </p>
            <Link to="/" className="btn ">Learn More</Link>
           
        </div>
        <div class="categories_right">
            <article class="category">
                <span class="category_icon"><BiBitcoin/></span>
                <h5><b>Chennai</b></h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
            <article class="category">
                <span class="category_icon"><MdOutlineWebAsset/></span>
                <h5><b>Mumbai</b></h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
            <article class="category">
                <span class="category_icon"><CgWebsite/></span>
                <h5><b>Frontend Development</b></h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
            <article class="category">
                <span class="category_icon"> <GrServerCluster/></span>
                <h5><b>Kolkata</b></h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
            <article class="category">
                <span class="category_icon"><AiOutlineAppstore/></span>
                <h5><b>Bangaluru</b></h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
            <article class="category">
                <span class="category_icon"><TbBrandAirbnb/></span>
                <h5><b>Pune</b></h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
        </div>
    </div>
    </section>
    
  )
}

export default Categories