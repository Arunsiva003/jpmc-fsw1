import React from 'react';
import YouTube from 'react-youtube';
import './Stories.css'; // Make sure to import your CSS file
import course15 from "../images/bhumi12.jpg"; // Replace with actual path
import course16 from "../images/bhumi14.jpg"; // Replace with actual path
import course17 from "../images/bhumi15.jpg"; // Replace with actual path
import course18 from "../images/bhumi23.jpg"; // Replace with actual path
import course19 from "../images/bhumi22.jpg"; // Replace with actual path
import course20 from "../images/bhumi21.jpg"; // Replace with actual path


const StoriesPage = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="stories-page">
      <h2>Our Stories</h2>
      <div className="story">
        <h3>Story Title 1: The Impact of Education</h3>
        <p>Discover how education transforms lives and communities. Watch our inspiring video to see firsthand the difference Bhumi NGO makes in the lives of underprivileged children.</p>
        <YouTube videoId="IpYJjVw6wjU" opts={opts} />
        <img src={course15} alt="Inspiring Classroom" />
      </div>
      <div className="story">
        <h3>Story Title 2: Empowering Futures</h3>
        <p>Learn about our latest initiative aimed at empowering young minds. This article highlights the journey of a student who overcame adversity to achieve success.</p>
        <YouTube videoId="anotherVideoId" opts={opts} />
        <img src={course16} alt="Student Success Story" />
      </div>
      <div className="story">
        <h3>Article Title 1: The Power of Giving</h3>
        <p>In this article, we delve into the transformative power of giving. Hear from our donors and beneficiaries about the impact of their contributions on the community.</p>
        <img src={course17} alt="Community Impact" />
      </div>
      <div className="story">
        <h3>Article Title 2: Celebrating Success Stories</h3>
        <p>Join us as we celebrate the success stories of our students. From overcoming challenges to achieving their dreams, these stories inspire us all.</p>
        <img src={course18} alt="Celebrating Success" />
      </div>
      {/* Add more stories as needed */}
    </div>
  );
};

export default StoriesPage;
