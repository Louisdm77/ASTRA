import Ad from "./ad";
import Trust from "./trust";
import Carousel from "./carousel1";
const Body = () => {
  return (
    <div className="md:hidden">
      <Ad />
      <Trust />
      <Carousel />
      <hr />
    </div>
  );
};
export default Body;
