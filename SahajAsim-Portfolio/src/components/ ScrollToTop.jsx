import { useState, useEffect } from 'react';
import scrollup from '../assets/scrollup.svg'
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-22 right-8 z-50
            bg-white hover:bg-gray-200
            backdrop-blur-sm
            text-black
            p-4 rounded-full
            shadow-lg hover:shadow-xl
            transition-all duration-300
            hover:scale-110
            cursor-pointer
          "
        >
          {/* Up Arrow Icon */}
          <img className="w-6 h-6" src={scrollup} alt="" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;