import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import pageUrl from "../assets/pageUrl.json";

const HeaderComp = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  function handleScroll() {
    setIsScrolled(window.scrollY > 0); // Check if scrollY is greater than 0
  }

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "50px",
      duration: 500,
      delay: 1750, // no delay
      reset: false, // animations repeat every time the element comes into view
    });

    sr.reveal(".reveal-top", {container: ".container-header"});

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <div
      className={`container-header w-full h-20 flex justify-between gap-6 px-12 items-center fixed top-0 left-0 z-10 transition duration-300 bg-primary ${
        isScrolled ? "shadow-2xl" : ""
      }`}
    >
      <Link
        className="block text-3xl poppins-bold text-colorbase reveal-top"
        to={pageUrl.link.home}
      >
        Kalun<span className="text-secondary">a</span>
      </Link>
      <div className="flex gap-12 items-center reveal-top">
        <a
          className="text-sm text-colorbase hover-text-secondary poppins-semibold text-center"
          href="#home"
        >
          Halaman Depan
        </a>
        <a
          className="text-sm text-colorbase hover-text-secondary poppins-semibold text-center"
          href="#about_us"
        >
          Tentang Kami
        </a>
        <a
          className="text-sm text-colorbase hover-text-secondary poppins-semibold text-center"
          href="#feature"
        >
          Fitur
        </a>
      </div>
      <div className="flex gap-6 items-center reveal-top">
        <Link
          to={pageUrl.link.login}
          className="text-sm poppins-semibold text-colorbase py-2 px-3 border-colorbase rounded-full hover:text-[#004225] transition-all hover:bg-[#F5F5DC]"
        >
          Masuk
        </Link>
        <Link
          to={pageUrl.link.register}
          className="text-sm poppins-semibold text-colorbase py-2 px-3 border-colorbase rounded-full hover:text-[#004225] transition-all hover:bg-[#F5F5DC]"
        >
          Daftar
        </Link>
      </div>
    </div>
  );
};

export default HeaderComp;
