import { useState, useEffect } from "react";

const images = [
  "/Images/Home-bg.png",
  "/Images/Slide1.png",
  "/Images/slide2.png",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-full bg-center bg-no-repeat bg-cover text-black duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div>
        <h1 className="  text-wrap text-white text-7xl md:text-7xl  font-medium md:font-medium text-center pt-32 lg:pt-52 pb-6 h-auto">
          Africans. Meet. Date. Connect.{" "}
        </h1>
        <p className=" text-2xl px-6 text-center text-white font-normal md:text-3xl">
          Begin your journey to a lifetime of happiness, success, progress, and
          bliss.
          <br /> Your happiness starts here. Let’s go!
        </p>
      </div>
      <div className=" flex justify-center pt-12 flex-wrap pb-16">
        <a
          href="#"
          className="bg-transparent text-black px-1 py-1 rounded flex items-center"
        >
          <img
            src="/Images/Googleplay-whitesvg.svg"
            alt="Google Play"
            className="w-full h-full img-center"
          />
        </a>
        <a
          href="#"
          className="bg-transparent text-black px-4 py-2 rounded flex items-center"
        >
          <img
            src="/Images/Applestore-white.png"
            alt="App Store"
            className="w-full h-full mr-2"
          />
        </a>
      </div>
      <div className=" justify-center ">
        <a href="#footer">
          <img
            src="/Images/Home-arrow.png"
            alt=""
            className="hidden md:flex lg:flex xl:flex justify-center m-auto md:pb-24 md:pt-28"
          />
        </a>
      </div>
    </div>
  );
};

export default Slider;
