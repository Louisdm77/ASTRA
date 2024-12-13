import Ad from "./ad";
import Trust from "./trust";
import Carousel from "./carousel1";
import Review from "./review";
const Body = () => {
  return (
    <div className="md:hidden">
      <Ad />
      <Trust />
      <Carousel />
      <Review />
    </div>
  );
};
export default Body;
