import Nissan from "../assets/Images/nissan.jpg";
import Toto from "../assets/Images/toto.webp";
import Toyota from "../assets/Images/toyota.png";
import Vogue from "../assets/Images/vogue.png";
import Vodaphone from "../assets/Images/vodafone.png";
import Olx from "../assets/Images/olx.png";
import "../Components/carousel.css";

const Logos = () => {
  return (
    <div className="flex  scroll justify-between">
      <div className="h-[200px] flex caro-cont">
        <img
          src={Nissan}
          alt="nissan"
          className="h-full w-[30%] object-contain mr-5"
        />
        <img
          src={Vodaphone}
          alt="vodaphone"
          className="h-full w-[30%] object-contain mr-5"
        />
        <img
          src={Toyota}
          alt="toyota"
          className="h-full w-[30%] object-contain mr-5"
        />
        <img
          src={Olx}
          alt="olx"
          className="h-full w-[30%] object-contain mr-5"
        />
        <img
          src={Vogue}
          alt="vogue"
          className="h-full w-[30%] object-contain mr-5"
        />
        <img
          src={Toto}
          alt="toto"
          className="h-full w-[30%] object-contain mr-5"
        />
        <img
          src={Nissan}
          alt="nissan"
          className="h-full w-[30%] object-contain mr-5"
        />
        <img
          src={Vodaphone}
          alt="vodaphone"
          className="h-full w-[30%] object-contain mr-5"
        />
        <img
          src={Toyota}
          alt="toyota"
          className="h-full w-[30%] object-contain mr-5"
        />
        <img
          src={Olx}
          alt="olx"
          className="h-full w-[30%] object-contain mr-5"
        />
        <img
          src={Vogue}
          alt="vogue"
          className="h-full w-[30%] object-contain mr-5"
        />
        <img
          src={Toto}
          alt="toto"
          className="h-full w-[30%] object-contain mr-5"
        />
      </div>
    </div>
  );
};
export default Logos;
