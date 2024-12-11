import Ad from "./ad";
import Trust from "./trust";
import Carousel from "./carousel1";
const Body = () => {
  return (
    <div className="md:hidden">
      <Ad />
      <Trust />
      <Carousel />
    </div>
  );
};
export default Body;
