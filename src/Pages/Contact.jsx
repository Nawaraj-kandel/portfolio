import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Contact = () => {
    return (
        <div className="bg-white min-h-screen flex justify-center items-center py-24">
            <div className="p-8 bg-blue-300 rounded-lg shadow-2xl md:w-96 w-full mt-20">
                <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

                {/* Netlify Form Start */}
                <form name="contact" method="POST" data-netlify="true">
                    {/* Required for Netlify to detect the form */}
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name="name" // ✅ Added name
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email" // ✅ Added name
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            name="message" // ✅ Added name
                            rows="5"
                            placeholder="Enter your message"
                            required
                        ></textarea>
                    </div>

                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-300"
                        type="submit"
                    >
                        Send
                    </button>
                </form>
                {/* Netlify Form End */}

                <div className="mt-6">
                    <p className="text-center text-gray-600">Or reach us at:</p>
                    <p className="text-center text-blue-600 mt-2">
                        Email:{" "}
                        <a href="mailto:kandeln309@gmail.com" className="hover:underline">
                            kandeln309@gmail.com
                        </a>
                    </p>
                    <p className="text-center text-blue-600 mt-2">
                        Phone:{" "}
                        <a href="tel:+9779818081274" className="hover:underline">
                            +977 9818081274
                        </a>
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <h2 className="text-xl font-semibold mb-4">Available on</h2>
                    <ul className="flex justify-center space-x-6 text-2xl">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/nawaraj-kandel-07a179246/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="text-blue-700 cursor-pointer hover:scale-110 transition-transform duration-300" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Nawaraj-kandel"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="text-gray-800 cursor-pointer hover:scale-110 transition-transform duration-300" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/nawaraj.kandel_"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="text-pink-500 cursor-pointer hover:scale-110 transition-transform duration-300" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:kandeln309@gmail.com"
                                className="text-red-600 cursor-pointer hover:scale-110 transition-transform duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <CiMail className="text-red-600 cursor-pointer hover:scale-110 transition-transform duration-300" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
