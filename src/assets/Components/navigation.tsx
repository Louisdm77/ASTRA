import Astra from "../Images/Astra.png";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";

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

  return (
    <nav className="w-full ">
      <div className="flex justify-between items-center  p-6">
        <img src={Astra} alt="Astra Logo" className="h-10" />

        <div className="bg-gray-100 bg-opacity-20 p-1 border border-dotted border-r-none">
          <button
            className="w-8 h-8 flex items-center justify-center"
            aria-label="Menu"
            onClick={() => setMenu(true)}
            style={{ display: !menu ? "block" : "none" }}
          >
            <RxHamburgerMenu className="w-full h-full text-white" />
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center"
            aria-label="Menu"
            onClick={() => setMenu(false)}
            style={{ display: menu ? "block" : "none" }}
          >
            <LiaTimesSolid className="w-full h-full text-white" />
          </button>
        </div>
      </div>

      {menu && (
        <div className="bg-gray-100 w-full p-6">
          <a href="#" className="flex text-blue-600 text-black">
            Starter Template
          </a>

          <div className="flex justify-between items-center mt-4 w-full">
            <button
              onClick={handleAstra}
              className="flex items-center justify-between w-full"
            >
              <span>Astra</span>
              <IoIosArrowDown className="ml-2" />
            </button>
          </div>

          {astra && (
            <div>
              <ul className="mt-4">
                <li className="flex items-center leading-8 ml-2">
                  <IoIosArrowForward />
                  <div className="flex justify-between items-center w-full">
                    <button
                      className="flex items-center justify-between w-full"
                      onClick={handleAstram}
                    >
                      <span>Astra</span>
                      <IoIosArrowDown className="ml-2" />
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
                  className="flex justify-between items-center w-full"
                  onClick={handleBuilder}
                >
                  <span>Builder</span>
                  <IoIosArrowDown className="ml-2" />
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

          <div className="mt-4">
            <button
              className="flex justify-between items-center w-full"
              onClick={handleResource}
            >
              <span>Resources</span>
              <IoIosArrowDown className="ml-2 text-lg" />
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
        </div>
      )}
    </nav>
  );
};

export default Nav;
