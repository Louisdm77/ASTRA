import Nav from "../Components/navigation.tsx";
import Hero from "../Components/hero.tsx";

const Header = () => {
  return (
    <div className=" h-[500px] bg-gradient-to-r from-blue-700 to-purple-500">
      <Nav />
      <Hero />
    </div>
  );
};
export default Header;
