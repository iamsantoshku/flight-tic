

// import React, { useState, useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import Carousel from './Carousel';
// import img1 from "../../assets/img/blog/cat.png";
// import img2 from "../../assets/img/blog/cat2.png";
// import img3 from "../../assets/img/blog/cat3.png";
// import img4 from "../../assets/img/blog/cat4.png";
// import img5 from "../../assets/img/blog/cat5.png";
// import img6 from "../../assets/img/blog/cat6.png";
// import img7 from "../../assets/img/blog/cat7.png";
// import img8 from "../../assets/img/blog/cat8.png";
// import img10 from "../../assets/img/blog/blog.png";
// import img11 from "../../assets/img/blog/blog2.png";
// import img12 from "../../assets/img/blog/blog3.png";
// import NewsletterSignup from './NewsletterSignup';

// const images = [img1, img2, img3, img4, img5, img6, img7, img8];

// const GridFull = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Number of images to display at a time
//     const imagesPerSlide = 5;

//     // Function to go to the next set of images (move one image at a time)
//     const nextImageSet = () => {
//         setCurrentIndex((prevIndex) =>
//             (prevIndex + 1) % images.length
//         );
//     };

//     // Function to go to the previous set of images (move one image at a time)
//     const prevImageSet = () => {
//         setCurrentIndex((prevIndex) =>
//             (prevIndex - 1 + images.length) % images.length
//         );
//     };

//     // Automatically slide image sets every 5 seconds
//     useEffect(() => {
//         const interval = setInterval(nextImageSet, 5000); // Change 5000 to adjust time (milliseconds)

//         return () => clearInterval(interval); // Clear interval on component unmount
//     }, []);

//     // Get the current slice of images based on currentIndex
//     const getVisibleImages = () => {
//         // Create a circular slice to show images based on the index
//         const visibleImages = [];
//         for (let i = 0; i < imagesPerSlide; i++) {
//             visibleImages.push(images[(currentIndex + i) % images.length]);
//         }
//         return visibleImages;
//     };

//     return (
//         <div className="p-6 mt-20">
//             {/* Inspiration Section */}
//             <section className="mb-8">
//                 <div className="flex items-center space-x-2 text-sm mb-4 ml-[7vw]">
//                     <span>Home</span>
//                     <span>&gt;</span>
//                     <span>Blog</span>
//                 </div>
//                 <div className="cont1 flex justify-around">
//                     <div className="head1">
//                         <h1 className="text-7xl font-bold">Inspiration</h1>
//                         <h1 className='text-6xl font-semibold'> for Your Next Trips</h1>
//                         <h1 className="text-gray-500 text-3xl">Discover the World's Treasures with Travila</h1>
//                     </div>

//                     <div className="flex space-x-4 overflow-hidden">
//                         {/* Display the current set of images */}
//                         {getVisibleImages().map((image, index) => (
//                             <div key={index} className="text-center">
//                                 <img src={image} alt={`Inspiration ${currentIndex + index + 1}`} className="rounded-full w-24 h-24" />
//                                 <p className="mt-2">Inspiration {currentIndex + index + 1}</p>
//                                 <p className="text-gray-500">18 posts</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="space-x-2 ml-[85vw]">
//                     <button
//                         className="p-2 bg-gray-200 rounded-full"
//                         onClick={prevImageSet}
//                     >
//                         <FaArrowLeft />
//                     </button>
//                     <button
//                         className="p-2 bg-gray-200 rounded-full"
//                         onClick={nextImageSet}
//                     >
//                         <FaArrowRight />
//                     </button>
//                 </div>
//             </section>

//             {/* Blog Banner Section */}
//             <hr />
//             <section className="grid md:grid-cols-3 gap-6 mt-8">
//                 <div className="relative">
//                     <img src={img10} alt="Blog 1" className="w-full h-67 object-cover rounded-lg" />
//                     <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent rounded-lg">
//                         <span className="bg-white text-black px-2 py-1 rounded">Cultural</span>
//                         <h2 className="text-white mt-2">Savoring Life’s Palette: Art, Food, and Beyond</h2>
//                         <p className="text-gray-300 mt-1">By Jimmy Dave | 12 January 2024</p>
//                     </div>
//                 </div>
//                 <div className="relative">
//                     <img src={img11} alt="Blog 2" className="w-full h-67 object-cover rounded-lg" />
//                     <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent rounded-lg">
//                         <span className="bg-white text-black px-2 py-1 rounded">Wanderlust</span>
//                         <h2 className="text-white mt-2">Savoring Life’s Palette: Art, Food, and Beyond</h2>
//                         <p className="text-gray-300 mt-1">By Jimmy Dave | 12 January 2024</p>
//                     </div>
//                 </div>
//                 <div className="relative">
//                     <img src={img12} alt="Blog 3" className="w-full h-67 object-cover rounded-lg" />
//                     <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent rounded-lg">
//                         <span className="bg-white text-black px-2 py-1 rounded">Adventure</span>
//                         <h2 className="text-white mt-2">Canvas and Keyboard: An Art-Tech Affair</h2>
//                         <p className="text-gray-300 mt-1">By Jimmy Dave | 12 January 2024</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Navigation Icons */}
//             <div className="flex justify-center space-x-4 mt-8">
//                 <button className="bg-white shadow p-4 rounded-full">
//                     <span>Tours Booking</span>
//                 </button>
//                 <button className="bg-white shadow p-4 rounded-full">
//                     <span>Activities</span>
//                 </button>
//                 <button className="bg-white shadow p-4 rounded-full">
//                     <span>Destinations</span>
//                 </button>
//                 <button className="bg-white shadow p-4 rounded-full">
//                     <span>Hotels Booking</span>
//                 </button>
//                 <button className="bg-white shadow p-4 rounded-full">
//                     <span>Rental Car</span>
//                 </button>
//                 <button className="bg-white shadow p-4 rounded-full">
//                     <span>Tickets Booking</span>
//                 </button>
//             </div>
//             <Carousel />

//             <NewsletterSignup/>
//         </div>
//     );
// };

// export default GridFull;



// import React, { useState, useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import Carousel from './Carousel';
// import img1 from "../../assets/img/blog/cat.png";
// import img2 from "../../assets/img/blog/cat2.png";
// import img3 from "../../assets/img/blog/cat3.png";
// import img4 from "../../assets/img/blog/cat4.png";
// import img5 from "../../assets/img/blog/cat5.png";
// import img6 from "../../assets/img/blog/cat6.png";
// import img7 from "../../assets/img/blog/cat7.png";
// import img8 from "../../assets/img/blog/cat8.png";
// import img10 from "../../assets/img/blog/blog.png";
// import img11 from "../../assets/img/blog/blog2.png";
// import img12 from "../../assets/img/blog/blog3.png";
// import NewsletterSignup from './NewsletterSignup';

// const images = [img1, img2, img3, img4, img5, img6, img7, img8];

// const GridFull = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const imagesPerSlide = 5;

//     const nextImageSet = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     const prevImageSet = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     };

//     useEffect(() => {
//         const interval = setInterval(nextImageSet, 5000);
//         return () => clearInterval(interval);
//     }, []);

//     const getVisibleImages = () => {
//         const visibleImages = [];
//         for (let i = 0; i < imagesPerSlide; i++) {
//             visibleImages.push(images[(currentIndex + i) % images.length]);
//         }
//         return visibleImages;
//     };

//     return (
//         <div className="p-4 md:p-6 mt-8 md:mt-20">
//             {/* Inspiration Section */}
//             <section className="mb-8">
//                 <div className="flex items-center space-x-2 text-sm mb-4 ml-[7vw]">
//                     <span>Home</span>
//                     <span>&gt;</span>
//                     <span>Blog</span>
//                 </div>
//                 <div className="flex flex-col lg:flex-row items-center lg:justify-around">
//                     <div className="mb-8 lg:mb-0 text-center lg:text-left">
//                         <h1 className="text-4xl lg:text-7xl font-bold">Inspiration</h1>
//                         <h1 className="text-3xl lg:text-6xl font-semibold">for Your Next Trips</h1>
//                         <h2 className="text-lg lg:text-3xl text-gray-500">Discover the World's Treasures with Travila</h2>
//                     </div>

//                     <div className="flex space-x-4 overflow-hidden">
//                         {getVisibleImages().map((image, index) => (
//                             <div key={index} className="text-center">
//                                 <img src={image} alt={`Inspiration ${currentIndex + index + 1}`} className="rounded-full w-16 h-16 lg:w-24 lg:h-24" />
//                                 <p className="mt-2 text-sm lg:text-base">Inspiration {currentIndex + index + 1}</p>
//                                 <p className="text-gray-500 text-xs lg:text-sm">18 posts</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="flex justify-end mt-4 mr-4 lg:mr-8">
//                     <button className="p-2 bg-gray-200 rounded-full mr-2" onClick={prevImageSet}>
//                         <FaArrowLeft />
//                     </button>
//                     <button className="p-2 bg-gray-200 rounded-full" onClick={nextImageSet}>
//                         <FaArrowRight />
//                     </button>
//                 </div>
//             </section>

//             {/* Blog Banner Section */}
//             <hr />
//             <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
//                 {[img10, img11, img12].map((imgSrc, index) => (
//                     <div key={index} className="relative">
//                         <img src={imgSrc} alt={`Blog ${index + 1}`} className="w-full h-53 lg:h-67 object-cover rounded-lg" />
//                         <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-lg">
//                             <span className="bg-white text-black px-2 py-1 rounded">Category {index + 1}</span>
//                             <h2 className="text-white mt-2">Sample Title for Blog {index + 1}</h2>
//                             <p className="text-gray-300 mt-1">By Author | Date</p>
//                         </div>
//                     </div>
//                 ))}
//             </section>

//             {/* Navigation Icons */}
//             <div className="flex flex-wrap justify-center gap-4 mt-8">
//                 {["Tours Booking", "Activities", "Destinations", "Hotels Booking", "Rental Car", "Tickets Booking"].map((item, index) => (
//                     <button key={index} className="bg-white shadow p-4 rounded-full text-xs lg:text-base">
//                         <span>{item}</span>
//                     </button>
//                 ))}
//             </div>

//             {/* Carousel */}
//             <Carousel />

//             {/* Newsletter Signup */}
//             <NewsletterSignup />
//         </div>
//     );
// };

// export default GridFull;



import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Carousel from './Carousel';
import img1 from "../../assets/img/blog/cat.png";
import img2 from "../../assets/img/blog/cat2.png";
import img3 from "../../assets/img/blog/cat3.png";
import img4 from "../../assets/img/blog/cat4.png";
import img5 from "../../assets/img/blog/cat5.png";
import img6 from "../../assets/img/blog/cat6.png";
import img7 from "../../assets/img/blog/cat7.png";
import img8 from "../../assets/img/blog/cat8.png";
import img10 from "../../assets/img/blog/blog.png";
import img11 from "../../assets/img/blog/blog2.png";
import img12 from "../../assets/img/blog/blog3.png";
import NewsletterSignup from './NewsletterSignup';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const GridFull = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesPerSlide = 5;

    const nextImageSet = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImageSet = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImageSet, 5000);
        return () => clearInterval(interval);
    }, []);

    const getVisibleImages = () => {
        const visibleImages = [];
        for (let i = 0; i < imagesPerSlide; i++) {
            visibleImages.push(images[(currentIndex + i) % images.length]);
        }
        return visibleImages;
    };

    return (
        <div className="p-4 md:p-6 mt-8 md:mt-20">
            <motion.section
                className="mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInVariants}
            >
                <div className="flex items-center space-x-2 text-sm mb-4 ml-[7vw]">
                    <span>Home</span>
                    <span>&gt;</span>
                    <span>Blog</span>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:justify-around">
                    <div className="mb-8 lg:mb-0 text-center lg:text-left">
                        <h1 className="text-4xl lg:text-7xl font-bold">Inspiration</h1>
                        <h1 className="text-3xl lg:text-6xl font-semibold">for Your Next Trips</h1>
                        <h2 className="text-lg lg:text-3xl text-gray-500">Discover the World's Treasures with Travila</h2>
                    </div>

                    <div className="flex space-x-4 overflow-hidden">
                        {getVisibleImages().map((image, index) => (
                            <div key={index} className="text-center">
                                <img src={image} alt={`Inspiration ${currentIndex + index + 1}`} className="rounded-full w-16 h-16 lg:w-24 lg:h-24" />
                                <p className="mt-2 text-sm lg:text-base">Inspiration {currentIndex + index + 1}</p>
                                <p className="text-gray-500 text-xs lg:text-sm">18 posts</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end mt-4 mr-4 lg:mr-8">
                    <button className="p-2 bg-gray-200 rounded-full mr-2" onClick={prevImageSet}>
                        <FaArrowLeft />
                    </button>
                    <button className="p-2 bg-gray-200 rounded-full" onClick={nextImageSet}>
                        <FaArrowRight />
                    </button>
                </div>
            </motion.section>

            <hr />

            <motion.section
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInVariants}
            >
                {[img10, img11, img12].map((imgSrc, index) => (
                    <div key={index} className="relative">
                        <img src={imgSrc} alt={`Blog ${index + 1}`} className="w-full h-53 lg:h-67 object-cover rounded-lg" />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-lg">
                            <span className="bg-white text-black px-2 py-1 rounded">Category {index + 1}</span>
                            <h2 className="text-white mt-2">Sample Title for Blog {index + 1}</h2>
                            <p className="text-gray-300 mt-1">By Author | Date</p>
                        </div>
                    </div>
                ))}
            </motion.section>

            <motion.div
                className="flex flex-wrap justify-center gap-4 mt-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInVariants}
            >
                {["Tours Booking", "Activities", "Destinations", "Hotels Booking", "Rental Car", "Tickets Booking"].map((item, index) => (
                    <button key={index} className="bg-white shadow p-4 rounded-full text-xs lg:text-base">
                        <span>{item}</span>
                    </button>
                ))}
            </motion.div>

            <Carousel />
            <NewsletterSignup />
        </div>
    );
};

export default GridFull;
