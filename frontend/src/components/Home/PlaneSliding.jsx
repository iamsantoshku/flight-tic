
import React, { useState, useEffect } from 'react';

// Import your images
import img1 from "../../assets/planeslide/logo2.png";
import img2 from '../../assets/planeslide/logo3.png';
import img3 from '../../assets/planeslide/logo4.png';
import img4 from '../../assets/planeslide/logo5.png';
import img5 from '../../assets/planeslide/logo6.png';
import img6 from '../../assets/planeslide/logo9.png';
import img7 from '../../assets/planeslide/10logo.jpg';
import img8 from '../../assets/planeslide/11logo.jpg';
import img9 from '../../assets/planeslide/airind.log8.png';
import img10 from '../../assets/planeslide/logo9.png';
import img11 from '../../assets/planeslide/etihad.png';
import img12 from '../../assets/planeslide/empirates.png';

const Planesliding = () => {
  // Original images array
  const initialImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

  // Ensure the images array has at least 10 items (duplicated to create a seamless loop)
  const images = initialImages.length < 10 ? [...initialImages, ...initialImages] : [...initialImages, ...initialImages, ...initialImages];

  const [index, setIndex] = useState(0);

  // Automatic slide change every 2 seconds (2000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Handle the transition effect and reset if the index reaches the duplicated set
  useEffect(() => {
    if (index === images.length / 2) {
      setTimeout(() => {
        setIndex(0);
      }, 500);
    }
  }, [index, images.length]);

  return (
    <div className="relative w-full max-w-[1300px] mx-auto mt-[19vw] overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${(index % (images.length / 2)) * 10}%)` }}
      >
        {/* Display 10 images at a time */}
        {images.map((image, idx) => (
          <div key={idx} className="min-w-[10%] flex justify-center items-center">
            <img src={image} alt={`Logo ${idx + 1}`} className="h-16" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planesliding;
