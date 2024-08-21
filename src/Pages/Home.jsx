import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import Community from "../components/Community";
import How from "../components/Howitworks";
import Features from "../components/Features";
import About from "../components/Aboutus";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Imageslider";

function Home() {
  return (
    <main className=" bg-white justify-center font-HvDTrial max-w-screen-2xl m-auto">
      <Header />
      <section
        id="home"
        className=" mt-28 md:mt-24 justify-center bg-center bg-no-repeat items-center w-full "
      >
        <Slider />
      </section>
      <About />
      <Features />
      <How />
      <Testimonials />
      <Community />
      <Faq />
      <Download />
      <Footer />
    </main>
  );
}

export default Home;
