import { useState } from "react";
import Me from "../assets/Me.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [MenuOpen, setMenuOpen] = useState(false);
    const NavItems = [

        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Projects",
            path: "/projects"
        },
        {
            id: 3,
            name: "About",
            path: "/about"
        },
        {
            id: 4,
            name: "Portfolio",
            path: "/portfolio"
        },
        {
            id: 5,
            name: "Contact",
            path: "/contact"
        },
    ]
    const toggleMenu = () => {
        setMenuOpen(!MenuOpen);
    }
    return (
        <>
            <div className="max-w-full mx-auto p-4 md:px-12 shadow-md bg-white fixed top-0 left-0 right-0 ">
                <div className="flex justify-between items-center h-16">
                    {/* Logo and Name Section */}
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="flex items-center space-x-2">
                      
                        <img src={Me} className="w-12 h-12 rounded-full" alt="Nawaraj's photo" />
                        <div>
                            <h1 className="font-semibold text-lg md:text-xl cursor-pointer">Nawaraj</h1>
                            <p className="text-sm text-gray-600 hidden sm:block">Web Developer</p>
                        </div>
                            </Link>
                    </div>

                    {/* Navigation Links for Desktop */}
                    <div>
                        <ul className="hidden md:flex space-x-6 text-lg font-medium">
                            {
                                NavItems.map(({ id, name, path }) => (
                                    <li key={id} className="hover:text-blue-500 scale-105 cursor-pointer text-lg"><Link to={path}>{name}</Link></li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Hamburger Menu Button for Mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-2xl focus:outline-none" >
                            {MenuOpen ? "✖" : "☰"}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {MenuOpen && (
                    <div className="md:hidden mt-4">
                        <ul className="md:hidden flex flex-col justify-center items-center space-x-6 text-lg font-medium">
                            {
                                NavItems.map(({ id, name, path }) => (
                                    <li key={id} className="hover:text-blue-500 scale-105 cursor-pointer text-lg my-4">
                                        <Link to={path} onClick={() => setMenuOpen(false)}>
                                            {name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
