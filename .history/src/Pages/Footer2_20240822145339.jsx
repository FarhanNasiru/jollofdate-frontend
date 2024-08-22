import { NavLink } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer
      id="footer"
      className=" font-HvDTrial px-20 pt-44 bg-featuresY text-white mb-5 max-w-screen-2xl justify-center m-auto"
    >
      <div className="">
        <div className="flex flex-wrap lg:space-x-8 mb-20 lg:justify-between space-y-8 lg:space-y-0">
          <div className="">
            <p className="font-Almendra font-bold pb-3 text-5xl">Jollof date</p>
            <p className="lg:w-96 text-xl">
              At JollofDate, we are solving a fundamental problem when it comes
              to dating. We put your love interest first and aim to provide you
              with the best Jollof you will ever have whether it’s Nigerian or
              Ghanaian Jollof.
            </p>
            <div className="flex space-x-7 pt-7">
              <a href="" id="">
                <img src="/Images/facebook.png" alt="" />
              </a>
              <a href="" id="">
                <img src="/Images/ig.png" alt="" className="" />
              </a>
              <a href="" id="">
                <img src="/Images/twitter.png" alt="" />
              </a>
            </div>
          </div>
          <div className=" md:pt-6 lg:p-6 pr-6">
            <h1 className="font-bold text-2xl pb-8">Company</h1>
            <div className="">
              <ul className="space-y-3">
                <li>
                  <NavLink to="/" className="text-xl" onClick={scrollToTop}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-xl" onClick={scrollToTop}>
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="text-xl" onClick={scrollToTop}>
                    How it Works
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/terms"
                    className="text-xl"
                    onClick={scrollToTop}
                  >
                    Terms
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/privacy"
                    className="text-xl"
                    onClick={scrollToTop}
                  >
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className=" md:pt-6 lg:p-6">
            <h1 className="font-bold text-2xl pb-8">Contact Us</h1>
            <div className="space-y-3">
              <div className="flex gap-3 ">
                <img
                  src="/Images/ic_baseline-phone.svg"
                  alt=""
                  className="text-xl"
                />
                +1 656 774 7848
              </div>
              <div className="flex gap-3 text-xl">
                <img src="/Images/mdi_web.svg" alt="" />
                <a href="">jollofdate.com</a>
              </div>
              <div className="flex gap-3 text-xl">
                <img src="/Images/bx_support.svg" alt="" />
                <a href="">support@jollofdate.com</a>
              </div>
            </div>
          </div>
          <div className="md:pt-6">
            <h1 className="font-bold text-2xl">Get the latest information</h1>
            <div>
              <div className="flex items-center w-72 mx-auto mt-10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow p-4 border border-gray-300 rounded-l-md "
                />
                <button className=" text-white rounded-r-md ">
                  <img src="/Images/email.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" justify-center  block border-solid border rounded-b px-6"></div>
        <div className=" flex-wrap text-center py-4 justify-center m-auto md:pt-11 md:pb-10">
          Copyright @ 2024 Jollofdate. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
