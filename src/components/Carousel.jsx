import React, { useState, useEffect } from 'react';
import ImageOneSlider from '../assets/images/1.jpg'
import ImageTwoSlider from '../assets/images/2.jpg'


const images = [ImageOneSlider, ImageTwoSlider];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full mx-auto">
            <div className="overflow-hidden">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="w-full  object-cover transition-transform duration-500 ease-in-out"
                />
            </div>
            <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200">
                Prev
            </button>
            <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200">
                Next
            </button>
        </div>
    );
};

export default Carousel;
