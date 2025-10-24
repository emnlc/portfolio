import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import Links from "./Links";

const Navbar = () => {
  const [dark, setDark] = useState(() => {
    const storedPreference = localStorage.getItem("darkMode");
    return storedPreference === null ? true : JSON.parse(storedPreference);
  });

  useEffect(() => {
    const themeColorMetaTag = document.querySelector(
      'meta[name="theme-color"]'
    );
    if (dark) {
      document.documentElement.classList.add("dark");
      if (themeColorMetaTag) {
        themeColorMetaTag.setAttribute("content", "#0a0a0a");
      }
    } else {
      document.documentElement.classList.remove("dark");
      if (themeColorMetaTag) {
        themeColorMetaTag.setAttribute("content", "#ffffff");
      }
    }
  }, [dark]);

  const darkModeHandler = () => {
    setDark((prevDark) => {
      const newDarkMode = !prevDark;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      return newDarkMode;
    });
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4 px-4">
        <Link
          to="/"
          className="text-xl font-medium tracking-tight text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors"
        >
          emnlc
        </Link>

        <div className="flex items-center gap-4">
          <Links navItems={navItems} />

          <button
            onClick={darkModeHandler}
            className="relative w-5 h-5"
            aria-label="Toggle dark mode"
          >
            <motion.img
              animate={{
                opacity: dark ? 1 : 0,
                rotate: dark ? 0 : 90,
                scale: dark ? 1 : 0.8,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
              src="moon.svg"
              alt="Dark Mode"
            />
            <motion.img
              animate={{
                opacity: dark ? 0 : 1,
                rotate: dark ? -90 : 0,
                scale: dark ? 0.8 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
              src="sun.svg"
              alt="Light Mode"
            />
          </button>
        </div>
      </div>
      {/* Border line with padding */}
      <div className="px-4">
        <div className="w-full h-px bg-black/10 dark:bg-white/10" />
      </div>
    </div>
  );
};

export default Navbar;
