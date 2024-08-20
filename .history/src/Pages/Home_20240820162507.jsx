import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import Community from "../components/Community";
import How from "../components/Howitworks";
import Features from "../components/Features";
import About from "../components/Aboutus";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <main className=" bg-white justify-center font-HvDTrial">
      <Header />
      <section
        id="home"
        className="pl-8 pr-8 justify-center bg-center bg-no-repeat items-center w-full lg:pt-60 lg:pb-9 bg-[url('/Images/Home-bg.png')] h-auto"
      >
        <h1 className="  text-wrap text-white text-7xl md:text-7xl  font-medium md:font-semibold text-center pt-32 pb-6 h-auto">
          Africans. Meet. Date. Connect.{" "}
        </h1>
        <p className=" text-2xl px-6 text-center text-white font-normal md:text-3xl">
          Begin your journey to a lifetime of happiness, success, progress, and
          bliss.
          <br /> Your happiness starts here. Let’s go!
        </p>
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
              className=" sm:hidden md:flex lg:flex xl:flex justify-center m-auto md:pb-32"
            />
          </a>
        </div>
      </section>
      <About />
      <Features />
      <How />
      <Community />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </main>
  );
}

export default Home;
