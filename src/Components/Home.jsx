import Hero1 from '../assets/Hero1.png';
import MyFile from '../assets/Numnarayan_Resume.pdf';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaBullhorn,
} from "react-icons/fa";

import { SiTailwindcss, SiC, SiGoogleanalytics, SiBootstrap } from "react-icons/si";



const Home = () => {
    return (
        <div className="my-28 max-w-full mx-auto p-4 md:px-20">
            <div className="flex flex-col md:flex-row">
                { /* Left Section */}
                <div className="mt-2 md:w-1/2 space-y-4 md:mt-36 order-2 md:order-1">
                    {/* Name Section */}
                    <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
                        NAWARAJ KANDEL
                    </h1>

                    {/* Intro Section */}
                    <div className="flex flex-wrap items-baseline text-xl sm:text-2xl md:text-4xl font-medium space-x-2">
                        <h1>Hello, I am a</h1>
                        {/* <span className="text-black font-bold">a Software Engineer</span> */}
                        <ReactTyped className="text-black font-bold"
                            strings={[" Software Engineer", " Front End Developer", " React Developer", "Digital Marketer ", ""]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                    </div>

                    {/* Description */}
                    <p className="text-base sm:text-lg leading-relaxed text-justify">
                        I am a passionate Front End Developer with experience in building web applications
                        using React, JavaScript, HTML, and CSS. I enjoy creating user-friendly and responsive
                        interfaces that provide a seamless user experience.
                    </p>
                    <div className="flex space-y-20 py-6">
                        <a
                            href={MyFile}
                            download="Numnarayan_Resume.pdf"
                            className="inline-block px-8 py-3 bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200"
                        >
                            <span className="flex items-center space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor" >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                                    />
                                </svg>
                                <span>Download Resume</span>
                            </span>
                        </a>

                    </div>
                    <br />
                    {/* social media links */}
                    <div className=" " >
                        <h1 className=' md:text-3xl space-y-4 font-semibold '>Available on</h1>
                        <ul className=' px-4 flex space-x-10 text-2xl mt-2'>
                            <a href="https://www.linkedin.com/in/nawaraj-kandel-07a179246/">   <li> <FaLinkedin className='text-2xl cursor-pointer hover:scale-110' /> </li> </a>
                            <a href="https://github.com/Nawaraj-kandel"> <li><FaGithub className='text-2xl cursor-pointer hover:scale-110' /></li> </a>
                            <a href="https://www.instagram.com/nawaraj.kandel_">   <li><FaInstagram className='text-2xl cursor-pointer hover:scale-110' /></li> </a>
                        </ul>
                    </div>
                </div>

                {/* Right Section */}
                <div className="sm:rounded-lg md:w-1/2 -mt-12 order-1  md:order-2  ">
                    <img src={Hero1} className="   " alt="Nawaraj's photo" />
                </div>
            </div>
            {/* Skills Section */}
            <div>
                <h1 className='mt-20 mb-10 text-center text-3xl md:text-4xl font-bold'>My Skills</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-20'>

                    {/* HTML */}
                    <div className='flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105'>
                        <FaHtml5 className='text-6xl text-orange-600 mb-4' />
                        <h2 className='text-lg font-semibold'>HTML</h2>
                    </div>

                    {/* CSS */}
                    <div className='flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105'>
                        <FaCss3Alt className='text-6xl text-blue-600 mb-4' />
                        <h2 className='text-lg font-semibold'>CSS</h2>
                    </div>

                    {/* JavaScript */}
                    <div className='flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105'>
                        <FaJsSquare className='text-6xl text-yellow-500 mb-4' />
                        <h2 className='text-lg font-semibold'>JavaScript</h2>
                    </div>

                    {/* React */}
                    <div className='flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105'>
                        <FaReact className='text-6xl text-cyan-500 mb-4 animate-spin-slow' />
                        <h2 className='text-lg font-semibold'>React</h2>
                    </div>

                    {/* C */}
                    <div className='flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105'>
                        <SiC className='text-6xl text-blue-700 mb-4' />
                        <h2 className='text-lg font-semibold'>C</h2>
                    </div>

                    {/* Tailwind CSS */}
                    <div className='flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105'>
                        <SiTailwindcss className='text-6xl text-sky-400 mb-4' />
                        <h2 className='text-lg font-semibold'>Tailwind CSS</h2>
                    </div>

                    {/* Bootstrap */}
                    <div className='flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105'>
                        <SiBootstrap className='text-6xl text-purple-600 mb-4' />
                        <h2 className='text-lg font-semibold'>Bootstrap</h2>
                    </div>

                    {/* SEO */}
                    <div className='flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105'>
                        <SiGoogleanalytics className='text-6xl text-green-600 mb-4' />
                        <h2 className='text-lg font-semibold'>SEO</h2>
                    </div>

                    {/* Digital Marketing */}
                    <div className='flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105'>
                        <FaBullhorn className='text-6xl text-red-600 mb-4' />
                        <h2 className='text-lg font-semibold'>Digital Marketing</h2>
                    </div>

                </div>
            </div>
            <div>
                {/* Projects Section */}
                <h1 className='mt-20 mb-10 text-center text-3xl md:text-4xl font-bold'>My Projects</h1>
                <p className='text-center text-lg md:text-xl mb-6'>Check out some of my recent work!</p>
                <div className='flex justify-center'>
                    <Link to="/projects" className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200">
                        View Projects
                    </Link>

                </div>
            </div>
            <div>
                {/* Contact Section */}
                <h1 className='mt-20 mb-10 text-center text-3xl md:text-4xl font-bold'>Contact Me</h1>
                <p className='text-center text-lg md:text-xl mb-6'>Feel free to reach out for collaborations or just a chat!</p>
                <div className='flex justify-center'>
                    <a
                        href="mailto:kandeln309@gmail.com"
                        className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200"   >
                        <Link to="/contact" className="flex items-center space-x-2">
                            Contact Me
                        </Link>


                    </a>
                </div>


            </div>

        </div>
    );
};


export default Home;

