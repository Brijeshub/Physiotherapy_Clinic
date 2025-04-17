import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "https://images.pexels.com/photos/20860582/pexels-photo-20860582/free-photo-of-physiotherapist-and-patient-exercising.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/20860592/pexels-photo-20860592/free-photo-of-physiotherapist-massaging-leg.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/20860589/pexels-photo-20860589/free-photo-of-physiotherapist-helping-a-patient-exercise-his-neck.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const AutoCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Slide"
          className="w-full h-auto object-cover rounded-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        <FaArrowLeft />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default AutoCarousel;
