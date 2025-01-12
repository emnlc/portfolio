import { useState, useEffect } from "react";

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

  return (
    <div className="w-full">
      <div className="font-bold text-2xl items-center flex justify-between py-4 px-4">
        <a
          href="https://emnlc.com"
          className="text-black dark:text-white hover:text-opacity-50 transition-all"
        >
          emnlc
        </a>

        <button onClick={darkModeHandler}>
          {dark ? (
            <img className="w-5 h-5" src="moon.svg" alt="Dark Mode" />
          ) : (
            <img className="w-5 h-5" src="sun.svg" alt="Light Mode" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
