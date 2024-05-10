import ContactHead from "../../images/contact.svg"


import "./contact.css"

function Contact() {
  return (
    <section class="contact">
    <div class="container contact_container">

    

        <aside class="contact_aside">
            <div class="aside_image">
            <img src={ContactHead} alt="" />
            </div>
            <h2>Contact Us</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellat cumque nam voluptas ipsum officia labore facilis at sed accusantium?
            </p>
            <ul class="contact_details">
              <li>
                  <i class="uil uil-phone-times"></i>
                  <h5>+234 8118033835</h5>
              </li>
              <li>
                  <i class="uil uil-envelope"></i>
                  <h5>maryolasehinde20@gmail.com</h5>
              </li>
              <li>
                  <i class="uil uil-location-point"></i>
                  <h5>Alagbado, Lagos</h5>
              </li>
          </ul>
          <ul class="contact_socials">
              <li>
                  <a href="https://facebook.com"><i class="uil uil-facebook-f"></i></a>
              </li>
              <li>
                  <a href="https://instagram.com"><i class="uil uil-instagram"></i></a>
              </li>
              <li>
                  <a href="https://twitter.com"><i class="uil uil-twitter"></i></a>
              </li>
              <li>
                  <a href="https://linkedin.com"><i class="uil uil-linkedin-alt"></i></a>
              </li>
          </ul>
        </aside>


        <form action="https://formspree.io/f/mpzndrjz" method="POST" class="contact_form">
          <div class="form_name">
              <input type="text" name="First name" placeholder="First Name" required></input>
              <input type="text" name="Last name" placeholder="Last Name" required></input>
          </div>
          <input type="email" name="Email Address" placeholder="Your Email Address" required></input>

          <textarea name="Message" rows="7" placeholder="Message" required></textarea>

          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>



    </div>
</section>
  )
}

export default Contact