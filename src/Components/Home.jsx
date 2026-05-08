import PropTypes from 'prop-types';
import Hero1 from '../assets/Hero1.png';
import MyFile from '../assets/Numnarayan_Resume.pdf';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaBullhorn,
} from "react-icons/fa";

import { SiTailwindcss, SiC, SiGoogleanalytics, SiBootstrap, SiPython } from "react-icons/si";



const Home = ({ scrollToContact }) => {
    return (
        <div className="pt-28 my-8 max-w-full mx-auto p-4 md:px-20 min-h-screen">
            <div className="grid gap-10 md:grid-cols-2 items-center">
                <div className="space-y-6 animate-slide-in-left">
                    
                    <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight text-slate-950 dark:text-slate-100">
                        NAWARAJ KANDEL
                    </h1>

                    <div className="flex flex-wrap items-baseline text-xl sm:text-2xl md:text-4xl font-medium space-x-2 text-slate-800 dark:text-slate-200">
                        <span>Hello, I am a</span>
                        <ReactTyped
                            className="text-slate-950 dark:text-white font-bold"
                            strings={["Software Engineer", "Front End Developer", "React Developer", "Digital Marketer", "Lecturer"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                    </div>

                    <p className="text-base sm:text-lg leading-relaxed text-justify text-slate-700 dark:text-slate-300">
                        I build polished web experiences with React, JavaScript, HTML, and Tailwind. My focus is on responsive design, fast interactions, and clean interfaces that look great in both light and dark themes.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href={MyFile}
                            download="Numnarayan_Resume.pdf"
                            className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 dark:bg-slate-900 text-white dark:text-slate-100 font-semibold rounded-full shadow-xl hover:bg-slate-700 dark:hover:bg-slate-800 transition duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                                />
                            </svg>
                            Download Resume
                        </a>
                        <button
                            onClick={scrollToContact}
                            className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 dark:border-slate-700 rounded-full text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 shadow hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-200"
                        >
                            Contact Me
                        </button>
                    </div>

                    <div className="pt-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-slate-950 dark:text-slate-100">Available on</h2>
                        <ul className="mt-4 flex flex-wrap gap-6 text-3xl text-slate-800 dark:text-slate-200">
                            <li>
                                <a href="https://www.linkedin.com/in/nawaraj-kandel-07a179246/" className="transition-transform duration-200 hover:scale-110 hover:text-sky-400" target="_blank" rel="noreferrer">
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Nawaraj-kandel" className="transition-transform duration-200 hover:scale-110 hover:text-slate-100" target="_blank" rel="noreferrer">
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/nawaraj.kandel_" className="transition-transform duration-200 hover:scale-110 hover:text-pink-500" target="_blank" rel="noreferrer">
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative animate-slide-in-right">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-400/30 to-purple-500/30 blur-3xl"></div>
                    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-700 shadow-2xl bg-white dark:bg-slate-900 p-6">
                        <img src={Hero1} className="w-full h-auto object-cover rounded-3xl" alt="Nawaraj's photo" />
                    </div>
                </div>
            </div>

            <section className="mt-20">
                <h1 className="mb-10 text-center text-3xl md:text-4xl font-bold text-slate-950 dark:text-slate-100">My Skills</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-0">
                    {[
                        { icon: <FaHtml5 className='text-6xl text-orange-600 mb-4' />, label: 'HTML' },
                        { icon: <FaCss3Alt className='text-6xl text-blue-600 mb-4' />, label: 'CSS' },
                        { icon: <FaJsSquare className='text-6xl text-yellow-500 mb-4' />, label: 'JavaScript' },
                        { icon: <FaReact className='text-6xl text-cyan-500 mb-4 animate-spin-slow' />, label: 'React' },
                        { icon: <SiC className='text-6xl text-blue-700 mb-4' />, label: 'C' },
                        { icon: <SiTailwindcss className='text-6xl text-sky-400 mb-4' />, label: 'Tailwind CSS' },
                        { icon: <SiBootstrap className='text-6xl text-purple-600 mb-4' />, label: 'Bootstrap' },
                        { icon: <SiGoogleanalytics className='text-6xl text-green-600 mb-4' />, label: 'SEO' },
                        { icon: <FaBullhorn className='text-6xl text-red-600 mb-4' />, label: 'Digital Marketing' },
                        { icon: <SiPython className='text-6xl text-purple-600 mb-4' />, label: 'Python' },
                    ].map(({ icon, label }) => (
                        <div key={label} className='flex flex-col items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1'>
                            {icon}
                            <h2 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>{label}</h2>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-24 space-y-12">
                <div className="text-center">
                    <h1 className='mb-4 text-3xl md:text-4xl font-bold text-slate-950 dark:text-slate-100'>Projects & Contact</h1>
                    <p className='text-slate-700 dark:text-slate-300 text-lg md:text-xl'>Explore recent work and collaborate on new web experiences.</p>
                </div>
                <div className='grid gap-6 md:grid-cols-2'>
                    <div className='rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-8 shadow-lg transition duration-300 hover:-translate-y-1'>
                        <h2 className='text-2xl font-semibold text-slate-950 dark:text-slate-100 mb-4'>Recent Projects</h2>
                        <p className='text-slate-700 dark:text-slate-300 mb-6'>I build responsive, animated websites with modern styling. Click below to see project details and live demos.</p>
                        <button onClick={() => window.scrollTo({ top: document.getElementById('projects-section')?.offsetTop, behavior: 'smooth' })} className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-slate-900 text-white dark:text-slate-100 hover:bg-slate-700 dark:hover:bg-slate-800 transition'>View Projects</button>
                    </div>
                    <div className='rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-8 shadow-lg transition duration-300 hover:-translate-y-1'>
                        <h2 className='text-2xl font-semibold text-slate-950 dark:text-slate-100 mb-4'>Get in Touch</h2>
                        <p className='text-slate-700 dark:text-slate-300 mb-6'>Ready to start your next project? I’m available for frontend development, React builds, and digital marketing work.</p>
                        <button onClick={scrollToContact} className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900  text-white dark:text-slate-100 hover:bg-slate-600 dark:hover:bg-sky-500 transition'>Contact Me</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

Home.propTypes = {
    scrollToContact: PropTypes.func.isRequired,
};

export default Home;

