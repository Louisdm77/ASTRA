import { useEffect, useState } from "react";
import "animate.css";
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

  const [animation, setAnimation] = useState("animate__slideOutLeft");
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("animate__slideOutLeft");
      setTimeout(() => {
        setNum((prev) => (prev === 2 ? 0 : prev + 1));
        setAnimation("animate__slideInRight");
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="h-[150px] w-full overflow-hidden">
        <div
          className={`text-center animate__animated ${animation} mb-6 mt-4 w-full`}
        >
          <h2 className="text-blue-700 text-3xl font-bold">
            {renders[num].num}
          </h2>
          <p className="text-lg font-bold text-gray-700">{renders[num].cap}</p>
        </div>
      </div>
    </>
  );
};
export default Carousel;
