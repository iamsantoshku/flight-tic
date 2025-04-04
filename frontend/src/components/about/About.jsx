// import React from 'react'
// import TravelBooking from './TravelBooking'
// import AdventureSection from './AdventureSection'
// import TeamSection from './TeamSection'
// import Testimonials from '../Home/Testimonials'

// const About = () => {
//   return (
//     <>
//     <div className=''>
//         <TravelBooking/>      
//     </div>

//     <div className=''>
//         <AdventureSection/>      
//     </div>

//     <div className=''>
//         <TeamSection/>      
//     </div>

//     <div className=''>
//         <Testimonials/>      
//     </div>
//     </>
    
//   )
// }

// export default About




// import React from 'react';
// import TravelBooking from './TravelBooking';
// import AdventureSection from './AdventureSection';
// import TeamSection from './TeamSection';
// import Testimonials from '../Home/Testimonials';

// const About = () => {
//   return (
//     <>
//       <div className="relative bg-gradient-to-r from-blue-100 via-purple-50 to-indigo-100 py-12 px-4 sm:px-8 lg:px-16">
//         <div className="animate-fade-in-up transform transition-all duration-700 ease-out">
//           <TravelBooking />
//         </div>
//       </div>

//       <div className="relative bg-gradient-to-r from-yellow-100 to-pink-100 py-12 px-4 sm:px-8 lg:px-16">
//         <div className="animate-fade-in-left transform transition-all duration-700 ease-out">
//           <AdventureSection />
//         </div>
//       </div>

//       <div className="relative bg-gradient-to-r from-green-100 to-blue-50 py-12 px-4 sm:px-8 lg:px-16">
//         <div className="animate-fade-in-right transform transition-all duration-700 ease-out">
//           <TeamSection />
//         </div>
//       </div>

//       <div className="relative bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-12 px-4 sm:px-8 lg:px-16">
//         <div className="animate-fade-in-up transform transition-all duration-700 ease-out">
//           <Testimonials />
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;



import React from 'react';
import { motion } from 'framer-motion';
import TravelBooking from './TravelBooking';
import AdventureSection from './AdventureSection';
import TeamSection from './TeamSection';
import Testimonials from '../Home/Testimonials';
import DestinationCard from './DestinationCard';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const About = () => {
  return (
    <>
      <motion.div
        className="relative bg-gradient-to-r from-blue-100 via-purple-50 to-indigo-100 py-12 px-4 sm:px-8 lg:px-16"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <TravelBooking />
      </motion.div>

      <motion.div
        className="relative bg-gradient-to-r from-yellow-100 to-pink-100 py-12 px-4 sm:px-8 lg:px-16"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AdventureSection />
      </motion.div>

      <motion.div
        className="relative bg-gradient-to-r from-green-100 to-blue-50 py-12 px-4 sm:px-8 lg:px-16"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <TeamSection />
      </motion.div>

      <motion.div
        className="relative bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-12 px-4 sm:px-8 lg:px-16"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        className="relative bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-12 px-4 sm:px-8 lg:px-16"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <DestinationCard />
      </motion.div>
    </>
  );
};

export default About;
