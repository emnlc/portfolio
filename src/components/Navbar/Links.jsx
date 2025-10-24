import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

function Links({ navItems }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const getCurrentPage = () => {
    if (location.pathname === "/") return "Home";
    if (location.pathname === "/projects") return "Projects";
    return "Home";
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest(".nav-dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropdownOpen]);

  const otherPages = navItems.filter((item) => item.name !== getCurrentPage());

  return (
    <div className="relative nav-dropdown">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 text-sm font-light text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors border-b border-black/20 dark:border-white/20 hover:border-black/60 dark:hover:border-white/60"
      >
        {getCurrentPage()}
        <motion.div
          animate={{ rotate: dropdownOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 mt-2 overflow-hidden bg-white dark:bg-dark-primary w-full min-w-full"
          >
            {otherPages.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <Link
                  to={item.path}
                  className="block py-1 text-sm font-light text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors border-b border-black/20 dark:border-white/20 hover:border-black/60 dark:hover:border-white/60 whitespace-nowrap"
                  onClick={() => setDropdownOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

Links.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Links;
