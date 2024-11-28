



// import React, { useState, useEffect } from 'react';

// // Import your images
// import img1 from "../../assets/planeslide/logo2.png";
// import img2 from '../../assets/planeslide/logo3.png';
// import img3 from '../../assets/planeslide/logo4.png';
// import img4 from '../../assets/planeslide/logo5.png';
// import img5 from '../../assets/planeslide/logo6.png';
// import img6 from '../../assets/planeslide/logo9.png';
// import img7 from '../../assets/planeslide/10logo.jpg';
// import img8 from '../../assets/planeslide/11logo.jpg';
// import img9 from '../../assets/planeslide/airind.log8.png';
// import img10 from '../../assets/planeslide/logo9.png';
// import img11 from '../../assets/planeslide/etihad.png';
// import img12 from '../../assets/planeslide/empirates.png';
// import img13 from '../../assets/planeslide/emirates.png';
// import img14 from '../../assets/planeslide/pal-airlines.png';
// import img15 from '../../assets/planeslide/Qatar-Airways-Logo.png';
// import img16 from '../../assets/planeslide/images.png';
// import img17 from '../../assets/planeslide/westJet.svg';
// import img18 from '../../assets/planeslide/delta.svg';
// import img19 from '../../assets/planeslide/ata.svg';
// import img20 from '../../assets/planeslide/cubana.svg';
// import img21 from '../../assets/planeslide/egyptAir.svg';
// import img22 from '../../assets/planeslide/casa.svg';
// import img23 from '../../assets/planeslide/adc.svg';

// const Planesliding = () => {
//   // Original images array
//   const initialImages = [ img6, img7, img8, img9, img10, img15, img16, img17, img18, img19, img20, img21, img22, img23 ];

//   // Duplicate images to create a seamless loop
//   const images = [...initialImages, ...initialImages, ...initialImages];
  
//   const [index, setIndex] = useState(0);

//   // Automatic slide change every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   // Reset index to prevent the transition "snap" effect
//   useEffect(() => {
//     if (index === images.length / 2) {
//       setTimeout(() => setIndex(0), 500);
//     }
//   }, [index, images.length]);

//   return (
//     // mt-[110vw] lg:mt-[17vw] sm:mt-[0vw]
//     <div className="relative w-full max-w-[1300px] mx-auto mt-[140vw] lg:mt-[57vw] sm:mt-[0vw] overflow-hidden">
//       <div
//         className="flex transition-transform duration-500 ease-out"
//         style={{ transform: `translateX(-${(index % (images.length / 2)) * 10}%)` }}
//       >
//         {/* Adjust item width for responsive display */}
//         {images.map((image, idx) => (
//           <div key={idx} className="min-w-[30%] sm:min-w-[20%] md:min-w-[15%] lg:min-w-[10%] flex justify-center items-center p-2">
//             <img src={image} alt={`Logo ${idx + 1}`} className="h-10 w-auto sm:h-12" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Planesliding;




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

const Planesliding = () => {
  // Original images array
  const initialImages = [ img6, img7, img8, img9, img10, img15, img16, img17, img18, img19, img20, img21, img22, img23 ];

  // Duplicate images to create a seamless loop
  const images = [...initialImages, ...initialImages, ...initialImages];
  
  const [index, setIndex] = useState(0);

  // Automatic slide change every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Reset index to prevent the transition "snap" effect
  useEffect(() => {
    if (index === images.length / 2) {
      setTimeout(() => setIndex(0), 500);
    }
  }, [index, images.length]);

  return (
    <div className="relative w-full max-w-[1300px] mx-auto mt-[140vw] sm:mt-[120vw] md:mt-[50vw] lg:mt-[20vw] xl:mt-[18vw] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${(index % (images.length / 2)) * 10}%)` }}
      >
        {images.map((image, idx) => (
          <div key={idx} className="min-w-[30%] sm:min-w-[20%] md:min-w-[15%] lg:min-w-[10%] flex justify-center items-center p-2">
            <img src={image} alt={`Logo ${idx + 1}`} className="h-10 w-auto sm:h-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planesliding;
