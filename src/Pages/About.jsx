import { FaUserGraduate, FaLaptopCode, FaHandshake } from 'react-icons/fa';
import profileImage from '../assets/Me.png'; // Replace with your profile image path

const About = () => {
    return (
        <div className="shadow-lg container mx-auto px-6 md:px-20 py-36 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
            <div className="text-center">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-32 h-32 mx-auto rounded-full shadow-md mb-6"
                />
                <h1 className="text-3xl font-bold mb-4">About Me</h1>
                <p className="text-lg text-gray-700">
                    Hello! I am <span className="font-bold">NUMNARAYAN KANDEL</span>, 
                    also known as <span className="font-bold">NAWARAJ KANDEL</span>. 
                    I am a student currently pursuing a Bachelor degree in Computer Science 
                    and Information Technology. As a passionate Front-End Developer, I specialize 
                    in building dynamic web applications using technologies like React, JavaScript, 
                    HTML, and CSS.  My goal is to create user-friendly and responsive interfaces 
                    that enhance the overall user experience.
                </p>
            </div>

            <div className="mt-10 space-y-8">
                <div className="flex flex-col items-center text-center">
                    <FaUserGraduate className="text-blue-500 text-4xl mb-4" />
                    <p className="text-lg text-gray-700">
                        I am dedicated to delivering high-quality work and exceptional service. My expertise spans various fields, and I strive to exceed expectations with every project I undertake.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <FaLaptopCode className="text-blue-500 text-4xl mb-4" />
                    <p className="text-lg text-gray-700">
                        My mission is to provide innovative solutions that help achieve goals. I believe in the power of collaboration and work closely with clients to understand their needs, delivering customized solutions that drive results.
                    </p>
                </div>

                    <div className="flex flex-col items-center text-center">
                        <FaHandshake className="text-blue-500 text-4xl mb-4" />
                        <p className="text-lg text-gray-700">
                           I have a experience in Social Media handling, where I have successfully managed various social media platforms, creating engaging content and building a strong online presence for brands. My skills in digital marketing and content creation allow me to effectively connect with audiences and drive engagement.
                           Currenttly learning SEO  (Search Engine Optimization) to enhance website visibility and improve search engine rankings. I am committed to staying updated with the latest trends and techniques in the industry to provide the best possible service to my clients.
                        </p>
                    </div>
                

                <div className="flex flex-col items-center text-center">
                    <FaHandshake className="text-blue-500 text-4xl mb-4" />
                    <p className="text-lg text-gray-700">
                        Thank you for visiting my website. I look forward to collaborating with you and helping you achieve your objectives!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
