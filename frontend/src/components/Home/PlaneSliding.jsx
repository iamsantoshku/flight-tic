
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
import img13 from '../../assets/planeslide/emirates.png';
import img14 from '../../assets/planeslide/pal-airlines.png';
import img15 from '../../assets/planeslide/Qatar-Airways-Logo.png';
import img16 from '../../assets/planeslide/images.png';
import img17 from '../../assets/planeslide/westJet.svg';
import img18 from '../../assets/planeslide/delta.svg';
import img19 from '../../assets/planeslide/ata.svg';
import img20 from '../../assets/planeslide/cubana.svg';
import img21 from '../../assets/planeslide/egyptAir.svg';
import img22 from '../../assets/planeslide/casa.svg';
import img23 from '../../assets/planeslide/adc.svg';

// const Planesliding = () => {
//   // Original images array
//   const initialImages = [ img5, img6, img7, img8, img9, img10,img13,img14,img15,img16];

//   // Ensure the images array has at least 10 items (duplicated to create a seamless loop)
//   const images = initialImages.length < 10 ? [...initialImages, ...initialImages] : [...initialImages, ...initialImages, ...initialImages];

//   const [index, setIndex] = useState(0);

//   // Automatic slide change every 2 seconds (2000ms)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [images.length]);

//   // Handle the transition effect and reset if the index reaches the duplicated set
//   useEffect(() => {
//     if (index === images.length / 2) {
//       setTimeout(() => {
//         setIndex(0);
//       }, 500);
//     }
//   }, [index, images.length]);

//   return (
//     <div className="relative w-full max-w-[1300px] mx-auto mt-[19vw] overflow-hidden">
//       <div
//         className="flex transition-transform duration-500"
//         style={{ transform: `translateX(-${(index % (images.length / 2)) * 10}%)` }}
//       >
//         {/* Display 10 images at a time */}
//         {images.map((image, idx) => (
//           <div key={idx} className="min-w-[10%] flex justify-center items-center">
//             <img src={image} alt={`Logo ${idx + 1}`} className="h-16" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Planesliding;



const Planesliding = () => {
  // Original images array
  const initialImages = [ img6, img7, img8, img9, img10, img15, img16,img17,img18,img18,img19,img20,img21,img22,img23];

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
          <div key={idx} className="min-w-[10%] flex justify-center items-center mx-2">
            <img src={image} alt={`Logo ${idx + 1}`} className="h-12 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planesliding;