import React, { useState, useEffect } from 'react';
import course1 from "../../images/bhumi21.jpg"; // Replace with actual path
import course2 from "../../images/course2.jpg"; // Replace with actual path
import course3 from "../../images/course3.jpg"; // Replace with actual path
import course4 from "../../images/course4.jpg"; // Replace with actual path
import course5 from "../../images/course5.jpg"; // Replace with actual path
import course6 from "../../images/course6.jpg"; // Replace with actual path
import course7 from "../../images/course7.jpg"; // Replace with actual path
import course8 from "../../images/course8.jpg"; // Replace with actual path
import course9 from "../../images/course9.jpg"; // Replace with actual path
import course10 from "../../images/course10.jpg"; // Replace with actual path
import course11 from "../../images/course1.jpg"; // Replace with actual path
import course12 from "../../images/bhumi22.jpg"; // Replace with actual path
import course13 from "../../images/bhumi11.jpg"; // Replace with actual path
import course14 from "../../images/bhumi13.jpg"; // Replace with actual path
import course15 from "../../images/bhumi12.jpg"; // Replace with actual path
import course16 from "../../images/bhumi14.jpg"; // Replace with actual path
import course17 from "../../images/bhumi15.jpg"; // Replace with actual path
import course18 from "../../images/bhumi23.jpg"; // Replace with actual path
import course19 from "../../images/bhumi22.jpg"; // Replace with actual path
import course20 from "../../images/bhumi21.jpg"; // Replace with actual path
import "./Course.css";
import SectionHead from '../../components/SectionHead';

const images = [
  course1,
  // course2,
  // course3,
  // course4,
  // course5,
  // course6,
  // course7,
  // course8,
  // course9,
  course10,
  course11,
  course12,
  course13,
  course14,
  course15,
  course16,
  course17,
  course18,
  course19,
  course20
];

const Course = () => {

  const [programs, setPrograms] = useState([]); // Initialize state to hold programs data
  const [randomImageIndex, setRandomImageIndex] = useState(0); 
  useEffect(() => {
    const response = fetch('https://jpmc-fsw1.onrender.com/programs');
    response.then(res => res.json()).then(data => setPrograms(data));
  },[])

  // Function to select a random image
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return randomIndex;
  };

  // Call getRandomImage initially to set a random image
  useEffect(() => {
    getRandomImage();
  }, []);

  console.log(programs);

  return (
    <section className="courses">
      <SectionHead title="Our Programs"/>
      <br/>
      <div className="container courses_container">
        {/* Previous articles */}
        {/*... */}
        {/* New articles */}
        <article className="course">
          <div className="course_image">
            <img src={course1} alt="Scholarship Fund" />
          </div>
          <div className="course_info">
            <h4>Scholarship Fund</h4>
            <p>
              The Scholarship Fund supports underprivileged students in their pursuit of higher education. By covering tuition fees, books, and other educational expenses, we empower them to break free from financial barriers.
            </p>
            <a href="/programdetails" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
          </div>
        </article>
        <article className="course">
          <div className="course_image">
            <img src={course12} alt="Healthcare Initiatives" />
          </div>
          <div className="course_info">
            <h4>Healthcare Initiatives</h4>
            <p>
              Bhumi NGO collaborates with healthcare providers to offer free medical check-ups, vaccinations, and health awareness programs to underprivileged communities. Our goal is to promote health and wellness.
            </p>
            <a href="/programdetails" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
          </div>
        </article>
        <article className="course">
          <div className="course_image">
            <img src={course13} alt="Nutrition Programs" />
          </div>
          <div className="course_info">
            <h4>Nutrition Programs</h4>
            <p>
              We run nutrition programs to ensure that underprivileged children receive nutritious meals, which are essential for their growth and development. Our programs focus on providing balanced diets.
            </p>
            <a href="/programdetails" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
          </div>
        </article>
        <article className="course">
          <div className="course_image">
            <img src={course14} alt="Mentorship Programs" />
          </div>
          <div className="course_info">
            <h4>Mentorship Programs</h4>
            <p>
              Bhumi NGO's mentorship programs pair underprivileged children with mentors who provide guidance, support, and role models. These relationships help children navigate academic and personal challenges.
            </p>
            <a href="/programdetails" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
          </div>
        </article>
        <article className="course">
          <div className="course_image">
            <img src={course15} alt="Sports Programs" />
          </div>
          <div className="course_info">
            <h4>Sports Programs</h4>
            <p>
              Sports programs are offered to encourage physical activity and teamwork among underprivileged children. These programs also serve as a platform for children to develop leadership skills and confidence.
            </p>
            <a href="/programdetails" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
          </div>
        </article>
        <article className="course">
          <div className="course_image">
            <img src={course16} alt="Art and Culture Programs" />
          </div>
          <div className="course_info">
            <h4>Art and Culture Programs</h4>
            <p>
              Bhumi NGO believes in the power of art and culture to inspire and uplift. Our art and culture programs provide underprivileged children with opportunities to express themselves creatively and learn about their heritage.
            </p>
            <a href="/programdetails" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
          </div>
        </article>
        <article className="course">
          <div className="course_image">
            <img src={course17} alt="Environmental Awareness Programs" />
          </div>
          <div className="course_info">
            <h4>Environmental Awareness Programs</h4>
            <p>
              To foster a sense of responsibility towards the environment, Bhumi NGO runs environmental awareness programs. These programs educate children about the importance of conservation and sustainable living.
            </p>
            <a href="/programdetails" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
          </div>
        </article>
        <article className="course">
          <div className="course_image">
            <img src={course18} alt="Career Guidance" />
          </div>
          <div className="course_info">
            <h4>Career Guidance</h4>
            <p>
              Bhumi NGO provides career guidance to underprivileged children, helping them explore various career paths and understand the educational requirements for their chosen fields.
            </p>
            <a href="/programdetails" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
          </div>
        </article>
        <article className="course">
          <div className="course_image">
            <img src={course19} alt="Digital Literacy" />
          </div>
          <div className="course_info">
            <h4>Digital Literacy</h4>
            <p>
              With the increasing reliance on technology, Bhumi NGO offers digital literacy programs to underprivileged children. These programs teach basic computer skills and internet safety.
            </p>
            <a href="/programdetails" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
          </div>
        </article>
        <article className="course">
          <div className="course_image">
            <img src={course20} alt="Emergency Relief" />
          </div>
          <div className="course_info">
            <h4>Emergency Relief</h4>
            <p>
              During times of crisis, Bhumi NGO provides emergency relief to underprivileged families. This includes food, shelter, and medical aid to ensure their immediate needs are met.
            </p>
            <a href="/programdetails" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
          </div>
        </article>
      </div>

      <section className="courses">
      <div className="container courses_container">
        {programs.map(program => ( // Map over the programs data to render each program
          <article key={program.id} className="course">
            <div className="course_image">
              <img src={images[getRandomImage()]} alt={program.name} /> {/* Assuming each program object has an image property */}
            </div>
            <div className="course_info">
              <h4>{program.name}</h4>
              <p>{program.description}</p>
              <a href={`/programdetails`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
            </div>
          </article>
        ))}
      </div>
      </section>

    </section>
  );
};

export default Course;
