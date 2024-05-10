import React from 'react';
import './programdetail.css';

const ProgramDetails = () => {
  const programData = {
    title: "Bhumi NGO's Education Program",
    description: "Empowering underprivileged children through education.",
    images: [
      { src: "path/to/image1.jpg", alt: "Image 1" },
      { src: "path/to/image2.jpg", alt: "Image 2" },
    ],
  };

  const handleMouseOver = (index) => {
    console.log(`Hovering over image ${index + 1}`);
  };

  return (
    <div className="program-details">
      <header className="banner">
        <img src={programData.images[0].src} alt={programData.images[0].alt} />
      </header>
      <div className='head-content'>
    <h1>{programData.title}</h1>
    <p>{programData.description}</p>
    </div>
      <main className="content">
        {programData.images.map((image, index) => (
          <div key={index} onMouseOver={() => handleMouseOver(index)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default ProgramDetails;
