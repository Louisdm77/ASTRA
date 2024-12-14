import Ad from "./ad";
import Trust from "./trust";
import Carousel from "./carousel1";
import Review from "./review";
import Logos from "./logoCarousel";
const Body = () => {
  return (
    <div className="md:hidden">
      <Ad />
      <Trust />
      <Carousel />
      <Review />
      <Logos />
    </div>
  );
};
export default Body;
