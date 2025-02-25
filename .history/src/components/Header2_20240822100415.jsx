import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div>
        <header className="flex justify-between items-center fixed top-0 w-11/12 m-auto bg-white rounded-full py-4 px-10 left-1/2 transform -translate-x-1/2 z-50 max-w-screen-2xl font-HvDTrial">
          <div className="logo">
            <img
              src="/Images/image 5 (1).jpg"
              alt="Jollof Date Logo"
              className="h-14 w-44"
            />
          </div>
          <nav className="hidden lg:flex">
            <ul className="flex space-x-8 text-xl font-medium">
              <li to="/">
                <NavLink
                  to="/"
                  className="text-black font-HvDTrial Brandon Grotesque-500"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-black font-HvDTrial Brandon Grotesque-500"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-black font-HvDTrial Brandon Grotesque-500"
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-black font-HvDTrial Brandon Grotesque-500"
                >
                  How It Works
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-black font-HvDTrial Brandon Grotesque-500"
                >
                  Testimonials
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="lg:hidden">
            <button onClick={toggleSidebar} className=" focus:outline">
              {isSidebarOpen ? (
                <img src="/Images/close-icon.png" alt="" />
              ) : (
                <img src="/Images/menu.png" alt="" />
              )}
            </button>
          </div>
          <button className="hidden lg:block bg-customYellow1 text-white border-1 py-2 px-6 rounded-full hover:bg-white hover:text-customYellow1 hover:border-2 font-HvDTrial">
            Get the App
          </button>
        </header>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden flex items-center justify-center`}
      >
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className="text-black focus:outline-none mb-8 absolute top-4 right-4"
          ></button>
          <nav className="text-center">
            <ul className="space-y-10 text-2xl font-medium font-HvDTrial">
              <li>
                <NavLink
                  to="/"
                  className="text-black font-HvDTrial Brandon Grotesque-500"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-black font-HvDTrial Brandon Grotesque-500"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-black text-2xl font-HvDTrial Brandon Grotesque-500"
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-black text-2xl font-HvDTrial Brandon Grotesque-500"
                >
                  How It Works
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="text-black text-2xl font-HvDTrial Brandon Grotesque-500"
                >
                  Testimonials
                </NavLink>
              </li>
              <li>
                <button className="bg-customYellow1 text-white border-1 py-2 px-6 rounded-full hover:bg-white hover:text-customYellow1 hover:border-2">
                  Get the App
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
