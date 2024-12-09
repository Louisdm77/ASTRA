import { BsBuilding } from "react-icons/bs";
import { PiStorefrontLight } from "react-icons/pi";
import { CiImageOn } from "react-icons/ci";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { LuPenTool } from "react-icons/lu";
import { BsCupHot } from "react-icons/bs";
import { FaCalendarDay } from "react-icons/fa";
import svg1 from "../Images/svg1.svg";
import svg2 from "../Images/svg2.svg";
import img1 from "../Images/astra-home-image-1.webp";

const Hero = () => {
  return (
    <>
      {" "}
      <div>
        <h2 className="text-2xl text-center mt-4 font-bold text-white relative">
          Have a Website in Mind? <br />
          Let's Make it Happen...
        </h2>
      </div>
      <div>
        <div className="mt-8 flex items-center justify-center ">
          <p className="border border-1 p-2 flex items-center border-gray-400 mr-5 text-sm  rounded-full text-white inline-block">
            <BsBuilding />
            Business and Services
          </p>
          <p className="border border-1 p-2 flex items-center border-gray-400 text-sm rounded-full text-white inline-block">
            <PiStorefrontLight />
            Online Store
          </p>
        </div>
        <div className="mt-2 flex items-center justify-around px-6 ">
          <p className="border border-1 p-2 flex items-center border-gray-400  text-sm  rounded-full text-white inline-block">
            <CiImageOn />
            Portfolio
          </p>
          <p className="border border-1 p-2 flex items-center border-gray-400 text-sm rounded-full text-white inline-block">
            <HiOutlineBuildingLibrary />
            Corporations and Organizations
          </p>
        </div>
        <div className="mt-2 flex items-center justify-around px-6 ">
          <p className="border border-1 p-2 flex items-center border-gray-400  text-sm  rounded-full text-white inline-block">
            <CiUser />
            Consultant
          </p>
          <p className="border border-1 p-2 flex items-center border-gray-400 text-sm rounded-full text-white inline-block">
            <LuPenTool />
            Blogs
          </p>{" "}
          <p className="border border-1 p-2 flex items-center border-gray-400 text-sm rounded-full text-white inline-block">
            <HiOutlineRocketLaunch />
            One Page
          </p>
        </div>
        <div className="mt-2 flex items-center  justify-center px-6 ">
          <p className="border border-1 p-2 flex items-center mr-4 border-gray-400  text-sm  rounded-full text-white inline-block">
            <BsCupHot />
            Food & Restaurants
          </p>
          <p className="border border-1 p-2 flex items-center ml-2 border-gray-400 text-sm rounded-full text-white inline-block">
            <FaCalendarDay />
            Events
          </p>{" "}
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="p-2 text-black bg-yellow-500 font-bold rounded-full">
          Get Started Now
        </button>
      </div>
      <div className="flex  items-center justify-center">
        <div className="h-20 w-20 mr-6">
          <img src={svg1} alt="svg1" className="w-full h-full" />
        </div>
        <div className="h-20 w-20">
          <img src={svg2} alt="svg2" className="w-full h-full" />
        </div>
      </div>
      <div>
        <div>
          <img src={img1} alt="img1" />
        </div>
      </div>
    </>
  );
};
export default Hero;
