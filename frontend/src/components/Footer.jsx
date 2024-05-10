import { Link } from "react-router-dom"
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/" className="logo">
                   <b> Bhumi NGO </b>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur, sequi adipisci ea cupiditate itaque sed minus consectetur magni porro.
                </p>
               
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/programs">Programs</Link>
                <Link to="/volunteer">Volunteer</Link>
                <Link to="/donate">Donate</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Primary</h4>
                <Link to="/s">Privacy Policy</Link>
                <Link to="/s">Terms and Condition</Link>
                <Link to="/s">Refund Policy</Link>
              
            </article>
            <article>
                <h4>Contact Us</h4>
                <Link to="/contact">+234 8118033835</Link>
                <Link to="/s">bhumingo@gmail.com</Link>
                <div className="footer_socials">
                   <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener">
                    <FaLinkedin/>
                    </a> 
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener">
                    <FaFacebookF/>
                    </a> 
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener">
                    <AiOutlineTwitter/>
                    </a> 
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener">
                    <AiFillInstagram/>
                    </a> 
                </div>
            </article>
        </div>
        <div className="footer_copyright">
            <small> AS &copy; All Right Reserved</small>
        </div>
    </footer>
  )
}

export default Footer