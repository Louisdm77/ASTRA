import Nav from "../Components/navigation.tsx";
import Hero from "../Components/hero.tsx";

const Header = () => {
  return (
    <div className=" h-auto bg-gradient-to-r from-blue-700 to-purple-500 md:hidden ">
      <Nav />
      <Hero />
    </div>
  );
};
export default Header;
