import Astra from "../Images/Astra.png";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import "animate.css";

const Nav = () => {
  const [astra, setAstra] = useState(false); //main astra dropdown
  const [astram, setAstram] = useState(false); //mini astra dropdown
  const [builder, setBuilder] = useState(false);
  const [resource, setResource] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleAstra = () => {
    setAstra((prev) => !prev);
    if (astram) {
      setAstram(false);
    }
    if (builder) {
      setBuilder(false);
    }
  };
  const handleAstram = () => {
    setAstram((prev) => !prev);
  };
  const handleBuilder = () => {
    setBuilder((prev) => !prev);
  };
  const handleResource = () => {
    setResource(!resource);
  };

  const handleMenuToggle = () => {
    setMenu(true); // Open the menu
    setAstra(false); // Close Astra dropdown
    setAstram(false); // Close Astram dropdown
    setBuilder(false); // Close Builder dropdown
    setResource(false); // Close Resources dropdown
  };
  return (
    <nav className="w-full ">
      <div className="flex justify-between items-center  p-6">
        <img src={Astra} alt="Astra Logo" className="h-10" />

        <div className="bg-gray-100 bg-opacity-20 p-1 ">
          <button
            className="w-6 h-6 flex items-center justify-center"
            aria-label="Menu"
            onClick={() => {
              handleMenuToggle();
            }}
            style={{ display: !menu ? "block" : "none" }}
          >
            <RxHamburgerMenu className="w-full h-full text-white" />
          </button>
          <button
            className="w-6 h-6 flex items-center justify-center"
            aria-label="Menu"
            onClick={() => {
              setMenu(false);
            }}
            style={{ display: menu ? "block" : "none" }}
          >
            <LiaTimesSolid className="w-full h-full text-white" />
          </button>
        </div>
      </div>

      {menu && (
        <div className="bg-gray-100 w-full p-6 absolute z-50 animate__animated animate__fadeInDownBig">
          <a href="#" className="flex text-black-600 text-black">
            Starter Template
          </a>

          <div className="flex justify-between items-center mt-4 w-full">
            <button
              onClick={handleAstra}
              className="flex items-center justify-between w-full hover:text-blue-800"
            >
              <span>Astra</span>
              <IoIosArrowDown className="ml-2 text-2xl" />
            </button>
          </div>

          {astra && (
            <div>
              <ul className="mt-4">
                <li className="flex items-center leading-8 ml-2">
                  <IoIosArrowForward />
                  <div className="flex justify-between items-center w-full">
                    <button
                      className="flex items-center justify-between w-full hover:text-blue-800"
                      onClick={handleAstram}
                    >
                      <span>Astra</span>
                      <IoIosArrowDown className="ml-2 text-2xl" />
                    </button>
                  </div>
                </li>
                {astram && (
                  <ul className="ml-6 leading-8">
                    <li className="flex items-center">
                      <IoIosArrowForward />
                      <span className="ml-2">Site Builder</span>
                    </li>
                    <li className="flex items-center">
                      <IoIosArrowForward />
                      <span className="ml-2">No Code Design</span>
                    </li>
                    <li className="flex items-center">
                      <IoIosArrowForward />
                      <span className="ml-2">Header Footer Builder</span>
                    </li>
                    <li className="flex items-center">
                      <IoIosArrowForward />
                      <span className="ml-2">Blog Layouts</span>
                    </li>
                    <li className="flex items-center">
                      <IoIosArrowForward />
                      <span className="ml-2">Mega Menu</span>
                    </li>
                    <li className="flex items-center">
                      <IoIosArrowForward />
                      <span className="ml-2">Side Layout</span>
                    </li>
                  </ul>
                )}
              </ul>

              <ul className="flex items-center leading-8 ml-2 mt-2">
                <IoIosArrowForward />
                <button
                  className="flex justify-between items-center hover:text-blue-800 w-full"
                  onClick={handleBuilder}
                >
                  <span>Builder</span>
                  <IoIosArrowDown className="ml-2 text-2xl" />
                </button>
              </ul>
              {builder && (
                <ul className="ml-6 leading-8">
                  <li className="flex items-center">
                    <IoIosArrowForward />
                    <span className="ml-2">Site Builder</span>
                  </li>
                  <li className="flex items-center">
                    <IoIosArrowForward />
                    <span className="ml-2">Spectra</span>
                  </li>
                  <li className="flex items-center">
                    <IoIosArrowForward />
                    <span className="ml-2">Elementor</span>
                  </li>
                </ul>
              )}
            </div>
          )}

          <div className="flex items-center leading-8 mt-4">
            <span>Pro</span>
          </div>

          <div className="mt-4 ">
            <button
              className="flex justify-between items-center w-full hover:text-blue-800"
              onClick={handleResource}
            >
              <span>Resources</span>
              <IoIosArrowDown className="ml-2 text-lg text-2xl" />
            </button>

            {resource && (
              <ul className="mt-2">
                <li className="flex items-center leading-8 ml-2 mt-2">
                  <IoIosArrowForward />
                  <div className="flex justify-between items-center w-full">
                    <span>Blog</span>
                  </div>
                </li>
                <li className="flex items-center leading-8 ml-2 mt-2">
                  <IoIosArrowForward />
                  <div className="flex justify-between items-center w-full">
                    <span>Knowledge Base</span>
                  </div>
                </li>
                <li className="flex items-center leading-8 ml-2 mt-2">
                  <IoIosArrowForward />
                  <div className="flex justify-between items-center w-full">
                    <span>Whats New</span>
                  </div>
                </li>
                <li className="flex items-center leading-8 ml-2 mt-2">
                  <IoIosArrowForward />
                  <div className="flex justify-between items-center w-full">
                    <span>Support</span>
                  </div>
                </li>
                <li className="flex items-center leading-8 ml-2 mt-2">
                  <IoIosArrowForward />
                  <div className="flex justify-between items-center w-full">
                    <span>Login to Account</span>
                  </div>
                </li>
              </ul>
            )}
          </div>

          <div className="flex items-center leading-8 mt-4 pointer">
            <span>Pricing</span>
          </div>
          <div className="flex items-center leading-8 mt-4 drop-shadow-xl font-bold text-gray-900">
            <span>Get Started</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
