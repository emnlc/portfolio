import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-50">
        <div className=" font-bold text-2xl items-center md:flex justify-between bg-white py-4 md:px-10 px-7">
          <a
            href="https://emnlc.com"
            className="hover:text-blue-500 transition-all"
          >
            emnlc.com
          </a>

          {/* Image container */}
          <div
            onClick={() => setOpen(!open)}
            className="h-8 w-8 text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
          >
            <img
              className=" transition-all"
              src={`${open ? "close.svg" : "hamburger.svg"}`}
              alt=""
            />
          </div>

          {/* Links container */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ${
              open ? " top-16 " : "top-[-490px]"
            }`}
          >
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                target="_blank"
                className="hover:text-blue-500 transition-all"
                href="https://github.com/emnlc"
              >
                GitHub
              </a>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                target="_blank"
                className="hover:text-blue-500 transition-all"
                href="https://www.linkedin.com/in/emnlc/"
              >
                LinkedIn
              </a>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <ScrollLink
                onClick={() => setOpen(!open)}
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-blue-500 transition-all cursor-pointer"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
