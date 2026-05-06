import { useEffect, useState, useRef } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) return storedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
};

const App = () => {
    const [theme, setTheme] = useState(getInitialTheme);
    const [activeSection, setActiveSection] = useState('home');
    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
    };

    const scrollToSection = (ref, section) => {
        setActiveSection(section);
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
            <Navbar 
                theme={theme} 
                toggleTheme={toggleTheme}
                activeSection={activeSection}
                scrollToHome={() => scrollToSection(homeRef, 'home')}
                scrollToProjects={() => scrollToSection(projectsRef, 'projects')}
                scrollToAbout={() => scrollToSection(aboutRef, 'about')}
                scrollToContact={() => scrollToSection(contactRef, 'contact')}
            />
            <div ref={homeRef}>
                <Home scrollToContact={() => scrollToSection(contactRef)} />
            </div>
            <div ref={projectsRef}>
                <Projects />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </div>
    );
};

export default App;
