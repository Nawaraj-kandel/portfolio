import { FaLaptopCode, FaChalkboardTeacher, FaUserTie } from 'react-icons/fa';

const About = () => {
    return (
        <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-white to-slate-100 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">

            <div className="max-w-6xl mx-auto text-center">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    About Me
                </h2>

                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
                    Front-End Developer and Lecturer focused on building modern web applications and teaching theoritical curriculum and practical skills.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="group p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                        <FaLaptopCode className="text-sky-500 text-4xl mb-4 mx-auto group-hover:scale-110 transition" />
                        <h3 className="font-semibold text-xl mb-3 text-slate-900 dark:text-white">
                            Developer
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300">
                            I build responsive and user-friendly web applications using React, JavaScript, HTML, and CSS with a focus on performance and clean design.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                        <FaChalkboardTeacher className="text-sky-500 text-4xl mb-4 mx-auto group-hover:scale-110 transition" />
                        <h3 className="font-semibold text-xl mb-3 text-slate-900 dark:text-white">
                            Instructor
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300">
                            With 2+ years of experience, I teach web technology and guide students through the NEB curriculum using practical and project-based learning.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                        <FaUserTie className="text-sky-500 text-4xl mb-4 mx-auto group-hover:scale-110 transition" />
                        <h3 className="font-semibold text-xl mb-3 text-slate-900 dark:text-white">
                            Growth & Skills
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300">
                            I continuously improve my skills in modern web development and SEO, while also working with digital content and online platforms.
                        </p>
                    </div>

                </div>

                {/* Stats */}
                <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-700 dark:text-slate-300">
                    <div className="text-center">
                        <h4 className="text-2xl font-bold text-sky-500">2+</h4>
                        <p>Years Teaching</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-2xl font-bold text-sky-500">NEB</h4>
                        <p>Curriculum</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-2xl font-bold text-sky-500">WEB</h4>
                        <p>Focused</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;