import logo from "../assets/images/WhiteLogo.png";
import { Link, NavLink } from "react-router-dom";

import { RiShoppingCartFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
// import { useShoppingCart } from '../context/ShoppingCartContext'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const { openCart, cartQuantity } = useShoppingCart()
  const activeStyles: React.CSSProperties = {
    borderBottom: "2px solid rgb(250 204 21)",
    color: "rgb(250 204 21)",
  };

  const linkStyles =
    "px-5 h-full flex items-center justify-center hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400";

  return (
    <header className="tracking-widest fixed w-full bg-[#008184] h-14 text-white pl-5 lg:px-7 flex justify-between items-center z-40">
      <Link to="/" className=" md:w-24">
        <img className="w-16 sm:w-24" src={logo} alt="logo" />
      </Link>
      <nav className="h-full md:flex items-center hidden">
        <NavLink
          to="products"
          className={linkStyles}
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          პროდუქცია
        </NavLink>
        <NavLink
          to="about"
          className={linkStyles}
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          ჩვენს შესახებ
        </NavLink>
        <NavLink
          to="contact"
          className={linkStyles}
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          კონტაქტი
        </NavLink>
      </nav>

      {/* MOBULE NAVIGATION */}
      {menuOpen && (
        <nav className="fixed text-center inset-0 top-14 pt-10 border-t-[1px]  md:hidden flex flex-col items-center gap-5 bg-primary">
          <NavLink
            to="products"
            onClick={() => setMenuOpen(false)}
            className="w-full py-3"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            პროდუქცია
          </NavLink>
          <NavLink
            to="about"
            onClick={() => setMenuOpen(false)}
            className="w-full py-3"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            ჩვენს შესახებ
          </NavLink>
          <NavLink
            to="contact"
            onClick={() => setMenuOpen(false)}
            className="w-full py-3"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            კონტაქტი
          </NavLink>
        </nav>
      )}
      <div className="text-2xl md:w-24 h-full flex items-center justify-between md:justify-end">
        <div className="pr-5 md:pr-0">
          <RiShoppingCartFill />
        </div>
        {/* <RiShoppingCartFill className="cursor-pointer" onClick={openCart} /> */}
        {/* {cartQuantity > 0 && (
            <div className="absolute rounded-full bottom-[-30%] right-[-50%] bg-red-600 w-5 h-5 flex justify-center items-center text-white text-xs">
              {cartQuantity}
            </div>
            )} */}

        {/* BURGER MENU ICON */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center h-full px-5 border-l-[1px] cursor-pointer"
        >
          <FiMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
