import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = () => {
  const [position, setPosition] = useState(0);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-end relative sm:me-10 z-10 transition-all">
      <a
        onClick={scrollToTop}
        className={`fixed bottom-10 me-5 w-10 h-10 sm:w-12.5 sm:h-12.5 lg:w-15 lg:h-15 flex justify-center items-center rounded-full transition delay-150 duration-500 ease-in-out hover:scale-120 hover:cursor-pointer bg-picto-primary hover:bg-picto-primary-dark text-white ${
          position < 200 && "scale-0"
        }`}
      >
        <FaArrowUp size={22} />
      </a>
    </div>
  );
};

export default ScrollToTop;
