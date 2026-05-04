import { useState } from "react";
import Me from "../assets/Me.png";
import PropTypes from "prop-types";

const Navbar = ({ theme, toggleTheme, scrollToHome, scrollToProjects, scrollToAbout, scrollToContact }) => {
    const [MenuOpen, setMenuOpen] = useState(false);
    const NavItems = [
        {
            id: 1,
            name: "Home",
            action: scrollToHome
        },
        {
            id: 2,
            name: "Projects",
            action: scrollToProjects
        },
        {
            id: 3,
            name: "About",
            action: scrollToAbout
        },
        {
            id: 5,
            name: "Contact",
            action: scrollToContact
        },
    ];
    const toggleMenu = () => {
        setMenuOpen(!MenuOpen);
    };
    return (
        <div className="max-w-full mx-auto p-4 md:px-12 shadow-md bg-white dark:bg-slate-900 fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
            <div className="flex justify-between items-center h-16">
                {/* Logo and Name Section */}
                <div className="flex items-center space-x-4">
                    <button onClick={scrollToHome} className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
                        <img src={Me} className="w-12 h-12 rounded-full ring-2 ring-slate-900 dark:ring-slate-100" alt="Nawaraj's photo" />
                        <div>
                            <h1 className="font-semibold text-lg md:text-xl cursor-pointer text-slate-900 dark:text-slate-100">Nawaraj</h1>
                            <p className="text-sm text-slate-600 dark:text-slate-300 hidden sm:block">Web Developer</p>
                        </div>
                    </button>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <ul className="hidden md:flex space-x-6 text-lg font-medium text-slate-800 dark:text-slate-100">
                        {
                            NavItems.map(({ id, name, action }) => (
                                <li key={id} className="hover:text-sky-500 transition-colors duration-200 scale-105 cursor-pointer text-lg">
                                    <button onClick={action} className="text-inherit font-inherit">
                                        {name}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                    <button
                        onClick={toggleTheme}
                        className="px-3 py-2 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition text-xl"
                        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </div>

                <div className="flex items-center gap-3 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="px-3 py-2 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    <button onClick={toggleMenu} className="text-2xl focus:outline-none text-slate-900 dark:text-slate-100">
                        {MenuOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {MenuOpen && (
                <div className="md:hidden mt-4 border-t border-slate-200 dark:border-slate-700 pt-4">
                    <ul className="flex flex-col justify-center items-center space-y-4 text-lg font-medium text-slate-900 dark:text-slate-100">
                        {
                            NavItems.map(({ id, name, action }) => (
                                <li key={id} className="hover:text-sky-500 transition-colors duration-200 scale-105 cursor-pointer">
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
                            ))
                        }
                    </ul>
                </div>
            )}
        </div>
    );
};
Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  scrollToHome: PropTypes.func.isRequired,
  scrollToProjects: PropTypes.func.isRequired,
  scrollToAbout: PropTypes.func.isRequired,
  scrollToContact: PropTypes.func.isRequired,
};

export default Navbar;
