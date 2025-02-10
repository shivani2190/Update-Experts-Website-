import React, { useState } from 'react';
import { Box } from '@mui/material';
import './SalonServices.css';

const images = [
  {
    src: "assets/services/body-polishing.jpg",
    alt: "Body Polishing",
    link: "#body-polishing"
  },
  {
    src: "assets/services/facial.jpg",
    alt: "Facial-Cleanup",
    link: "#facial"
  },
  {
    src: "assets/services/mani-pedi.jpg",
    alt: "Mani-Pedi",
    link: "#mani-pedi"
  },
  {
    src: "assets/services/hair-care.jpg",
    alt: "Hair Care",
    link: "#hair-care"
  },
  {
    src: "assets/services/threading.jpg",
    alt: "Threading/Face wax",
    link: "#threading"
  }
];

const SalonServices = () => {
  const [selectedIndex, setSelectedIndex] = useState(2);

  const moveToSelected = (direction) => {
    if (direction === "next") {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (direction === "prev") {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const getClassName = (index) => {
    const relativeIndex = (index - selectedIndex + images.length) % images.length;
    if (relativeIndex === 0) return "selected";
    if (relativeIndex === 1) return "next";
    if (relativeIndex === 2) return "nextRightSecond";
    if (relativeIndex === images.length - 1) return "prev";
    if (relativeIndex === images.length - 2) return "prevLeftSecond";
    return relativeIndex > 2 ? "hideRight" : "hideLeft";
  };

  return (
    <Box sx={{
      py: 8,
      background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        color: '#000000', 
        margin: '40px 0 20px',
        fontWeight: '700',
        fontSize: '2.5rem',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '3px',
          background: '#000000',
        }
      }}>
        Salon at Home
      </h2>
      <div id="carousel-area">
        <div id="carousel">
          {images.map((image, index) => (
            <div className={getClassName(index)} key={index}>
              <div className="img-wrap">
                <span className="img-text">{image.alt}</span>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  style={{ 
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button className="icon-btn" onClick={() => moveToSelected("prev")}>
            <img src="https://i.postimg.cc/jwWs9zZ1/arrow-L.png" alt="prev" className="icon-img" />
          </button>
          <button className="icon-btn" onClick={() => moveToSelected("next")}>
            <img src="https://i.postimg.cc/k6kndBHg/arrow-R.png" alt="next" className="icon-img" />
          </button>
        </div>
      </div>
    </Box>
  );
};

export default SalonServices;
