import AppIcon from "../assets/AppIcon.png";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className=" mt-12 py-10 flex flex-col gap-y-12  bg-gradient-to-r from-[#2C3E50] to-[#000000]  w-full md:grid md:grid-cols-4 md:h-[20vh] justify-center rounded-t-3xl ">
        <div className="flex justify-center items-center text-center">
          <Link to="/" className="flex md:ml-5 items-center gap-1">
            <img src={AppIcon} alt="AppIcon.png" className="h-9 w-9" />
            <span className="font-jersey text-3xl text-white">Blogify</span>
          </Link>
        </div>
        <div className="flex text-white items-center justify-center text-center">
          <ul className="flex flex-col gap-2 font-jersey text-3xl">
            <li>
              <Link to="/about" className=" hover:text-purple-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-500">
                Contact
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="flex text-white items-center justify-center text-center">
          <ul className="flex flex-col gap-y-2 text-3xl font-jersey">
            <li>
              <Link className="flex gap-x-2 items-center">
                <FaInstagram />
                <span className="hover:text-purple-500">Instagram</span>
              </Link>
            </li>
            <li>
              <Link className="flex gap-x-2 items-center">
                <FaFacebook />
                <span className="hover:text-purple-500">Facebook</span>
              </Link>
            </li>
            <li>
              <Link className="flex gap-x-2 items-center">
                <FaGithub />
                <span className="hover:text-purple-500">Github</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center text-3xl font-jersey">
          <div className="flex flex-col gap-x-2 text-center">
            <Link className="text-white hover:text-purple-500">
              Privacy Policy
            </Link>
            <Link className="text-white hover:text-purple-500">
              Terms of Conditions
            </Link>
            <span className="text-white hover:text-purple-500">
              Blogify&copy;<span className="text-purple-500">-2025</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
