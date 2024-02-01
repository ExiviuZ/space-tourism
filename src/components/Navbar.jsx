import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <nav className="flex relative  items-center justify-between p-[1rem] md:p-[0] md:mt-[3rem] w-[100%] md:w-[95%] ml-auto md:pr-0">
      <Link to={"/"} onClick={() => setIsOpenMenu(false)}>
        <img
          src="assets/shared/logo.svg"
          className="w-[40px] md:w-[48px]"
          alt=""
        />
      </Link>
      <ul
        className={`popout ${
          isOpenMenu ? "translate-x-[0]" : "translate-x-[100%]"
        } 
        z-[1] flex absolute items-start flex-col pl-[4rem] pt-[5rem] h-[100vh] gap-[2rem] top-[0] right-[0] max-w-[250px] w-[75%]  marker:font-bold  bg-prim-transparent backdrop-blur-xl list-[decimal-leading-zero] md:list-[none] xl:list-[decimal-leading-zero] text-[16px] uppercase tracking-[2.7px] md:translate-x-0  md:max-w-max  lg:max-w-[800px] md:w-[70%] md:justify-start md:p-[0] md:h-[96px] md:static md:bg-[#97979715] md:backdrop-blur-[50px] md:flex-row md:items-center md:gap-[2rem] md:pl-[6rem] md:pr-[5rem] md:py-[0] list-inside xl:before:content-[''] xl:before:absolute xl:before:h-[1px] xl:before:bg-[rgba(255,255,255,0.4)] xl:before:w-[55%] xl:before:right-[95%]`}
      >
        <button
          className="absolute right-[20px] top-[20px] cursor-pointer md:hidden"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <img src="assets/shared/icon-close.svg" alt="" />
        </button>
        <NavLink
          className="nav-item"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          to={"/"}
        >
          <li
            className={`relative pl-[0.25rem] md:pl-[0] before:content-[''] h-[100%] before:absolute before:h-[2px] before:w-[0%] hover:before:w-[100%] before:transition-all before:bg-[#fff8] before:left-0 before:bottom-[0]  md:before:top-[231%]`}
          >
            Home
          </li>
        </NavLink>
        <NavLink
          className="nav-item"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          to={"/destination"}
        >
          <li
            className={`relative pl-[0.25rem] md:pl-[0] before:content-[''] h-[100%] before:absolute before:h-[2px] before:w-[0%] hover:before:w-[100%] before:transition-all before:bg-[#fff8] before:left-0 before:bottom-[0]  md:before:top-[231%]`}
          >
            Destination
          </li>
        </NavLink>
        <NavLink
          className="nav-item"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          to={"/crew"}
        >
          <li
            className={`relative pl-[0.25rem] md:pl-[0] before:content-[''] h-[100%] before:absolute before:h-[2px] before:w-[0%] hover:before:w-[100%] before:transition-all before:bg-[#fff8] before:left-0 before:bottom-[0]  md:before:top-[231%]`}
          >
            Crew
          </li>
        </NavLink>
        <NavLink
          className="nav-item"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          to={"/technology"}
        >
          <li
            className={`relative pl-[0.25rem] md:pl-[0] before:content-[''] h-[100%] before:absolute before:h-[2px] before:w-[0%] hover:before:w-[100%] before:transition-all before:bg-[#fff8] before:left-0 before:bottom-[0]  md:before:top-[231%]`}
          >
            Technology
          </li>
        </NavLink>
      </ul>
      <button className="md:hidden">
        <img
          src="assets/shared/icon-hamburger.svg"
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          alt=""
        />
      </button>
    </nav>
  );
}

export default Navbar;
