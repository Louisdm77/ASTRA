import { useEffect, useState } from "react";
import "animate.css";
import "./carousel.css";
const Carousel = () => {
  const renders = [
    { num: "#1", cap: "Most Popular WordPress & Woo Theme" },
    { num: "10%", cap: "of *total WordPress Websites" },
    {
      num: "1.8M",
      cap: "Websites Trust Astra",
    },
  ];
  const [num, setNum] = useState(0);

  const [animation, setAnimation] = useState("slide-in");
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("slide-out"); //initialize the animation type

      setTimeout(() => {
        //for duration of obj visibility
        setNum((prev) => (prev === 2 ? 0 : prev + 1)); //set the index of object to be displayed
        setAnimation("slide-in"); //set the animation type that comes next
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="h-[150px] w-full overflow-hidden  relative">
        <div className={`text-center ${animation} mb-6  w-full carousel-item`}>
          <h2 className="text-blue-700 text-3xl font-bold">
            {renders[num].num}
          </h2>
          <p className="text-lg font-bold text-gray-700">{renders[num].cap}</p>
        </div>
      </div>
      <hr />
    </>
  );
};
export default Carousel;
