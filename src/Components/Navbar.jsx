
import { useState } from "react";
import Me from "../assets/Me.png";
import PropTypes from "prop-types";

const Navbar = ({
  theme,
  toggleTheme,
  activeSection,
  scrollToHome,
  scrollToProjects,
  scrollToAbout,
  scrollToContact,
}) => {
  const [MenuOpen, setMenuOpen] = useState(false);

  const NavItems = [
    {
      id: 1,
      name: "Home",
      action: scrollToHome,
      section: "home",
    },
    {
      id: 2,
      name: "Projects",
      action: scrollToProjects,
      section: "projects",
    },
    {
      id: 3,
      name: "About",
      action: scrollToAbout,
      section: "about",
    },
    {
      id: 4,
      name: "Contact",
      action: scrollToContact,
      section: "contact",
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  return (
    <div className="max-w-full mx-auto p-4 md:px-12 shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-slate-900">
      <div className="flex justify-between items-center h-8">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={scrollToHome}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img
              src={Me}
              className="w-12 h-12 rounded-full ring-2 ring-slate-900 dark:ring-slate-100"
              alt="Nawaraj's photo"
            />

            <div>
              <h1 className="font-semibold text-lg md:text-xl cursor-pointer text-slate-900 dark:text-slate-100">
                Nawaraj
              </h1>

              <p className="text-sm hidden sm:block text-slate-600 dark:text-slate-300">
                Web Developer
              </p>
            </div>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6 text-lg font-medium text-slate-800 dark:text-slate-100">
            {NavItems.map(({ id, name, action, section }) => (
              <li
                key={id}
                className={`transition-all duration-200 scale-105 cursor-pointer text-lg ${
                  activeSection === section
                    ? "text-sky-500 font-bold"
                    : "text-slate-800 dark:text-slate-100 hover:text-sky-500 translate-y-1"
                }`}
              >
                <button
                  onClick={action}
                  className="text-inherit font-inherit"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Button */}
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-full border transition text-xl border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700"
            title={
              theme === "dark"
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"
            }
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-full border transition border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none text-slate-900 dark:text-slate-100"
          >
            {MenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {MenuOpen && (
        <div className="md:hidden mt-4 border-t border-slate-200 dark:border-slate-700 pt-4">
          <ul className="flex flex-col justify-center items-center space-y-4 text-lg font-medium text-slate-900 dark:text-slate-100">
            {NavItems.map(({ id, name, action, section }) => (
              <li
                key={id}
                className={`transition-colors duration-200 scale-105 cursor-pointer ${
                  activeSection === section
                    ? "text-sky-500 font-bold"
                    : "text-slate-900 dark:text-slate-100 hover:text-sky-500"
                }`}
              >
                <button
                  onClick={() => {
                    action();
                    setMenuOpen(false);
                  }}
                  className="text-inherit font-inherit"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  scrollToHome: PropTypes.func.isRequired,
  scrollToProjects: PropTypes.func.isRequired,
  scrollToAbout: PropTypes.func.isRequired,
  scrollToContact: PropTypes.func.isRequired,
};

export default Navbar;