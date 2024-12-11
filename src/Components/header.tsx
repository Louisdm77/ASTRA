import Nav from "./navBar.tsx";
import Hero from "./hero.tsx";

const Header = () => {
  return (
    <div className=" h-auto bg-gradient-to-r from-blue-700 to-purple-500 md:hidden ">
      <Nav />
      <Hero />
    </div>
  );
};
export default Header;
