import AppIcon from "../assets/AppIcon.png";
import User from "../assets/user.png";
import Bell from "../assets/bell.png";

import { IoMdLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full fixed top-0 z-50 rounded-b-3xl overflow-hidden">
      <header>
        <nav>
          <ul className="flex justify-center items-center h-16 bg-gradient-to-r from-[#2C3E50] to-[#000000] border-b-2 border-x-2 border-black w-full text-white">
            <li>
              <NavLink to="/" className="flex ml-5 items-center gap-1">
                <img src={AppIcon} alt="AppIcon.png" className="h-9 w-9" />
                <span className="font-jersey text-3xl">Blogify</span>
              </NavLink>
            </li>

            {/* <li className="flex gap-6">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? " border-b-2 border-slate-900" : ""
                  } p-2 rounded-lg`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? " border-b-2 border-slate-900" : ""
                  } p-2 rounded-lg`
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? " border-b-2 border-slate-900" : ""
                  } p-2 rounded-lg`
                }
                to="/about"
              >
                About Us
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? " border-b-2 border-slate-900" : ""
                  } p-2 rounded-lg`
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li> */}
            {/* <li className="mr-12 flex gap-5 items-center">
              <img src={User} alt="user.png" className="h-9" />
              <div className="flex relative">
                <img src={Bell} alt="user.png" className="h-7" />
                <span className="absolute bottom-3 left-5">0</span>
              </div>
              <IoMdLogOut className=" text-2xl " />
            </li> */}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
