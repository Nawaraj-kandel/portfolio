import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const email = "kandeln307@gmail.com";

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        emailjs.sendForm(
            "service_jiurpws",
            "template_qv28zjb",
            form.current,
            "RBnYS89ZoCI0iSrWg"
        ).then(() => {
            setSuccess(true);
            setLoading(false);
            form.current.reset();
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        });
    };

    return (
        <div className="min-h-screen pt-20 pb-24 px-4 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">

            <div className="mx-auto mt-10 max-w-lg p-8 rounded-3xl shadow-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">

                <h1 className="text-3xl font-bold mb-6 text-center text-slate-950 dark:text-slate-100">
                    Contact Me
                </h1>

                {success && (
                    <p className="text-green-500 text-center mb-4">
                        Message sent successfully!
                    </p>
                )}

                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Name</label>
                        <input
                            className="w-full py-2 px-3 rounded bg-slate-100 dark:bg-slate-800"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Email</label>
                        <input
                            className="w-full py-2 px-3 rounded bg-slate-100 dark:bg-slate-800"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Message</label>
                        <textarea
                            className="w-full py-2 px-3 rounded bg-slate-100 dark:bg-slate-800"
                            name="message"
                            rows="5"
                            placeholder="Enter your message"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-slate-900 dark:bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-full transition duration-300"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>

                <div className="mt-6 text-center text-slate-700 dark:text-slate-300">
                    <p>Or reach me at:</p>

                    <p className="mt-2 text-sky-500">
                        Email: <a href={`mailto:${email}`}>{email}</a>
                    </p>

                    <p className="mt-2 text-sky-500">
                        Phone: <a href="tel:+9779818081274">+977 9818081274</a>
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <h2 className="text-xl font-semibold mb-4">Available on</h2>

                    <ul className="flex justify-center space-x-6 text-2xl">
                        <li>
                            <a href="https://www.linkedin.com/in/nawaraj-kandel/">
                                <FaLinkedin />
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/Nawaraj-kandel">
                                <FaGithub />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/nawaraj.kandel_">
                                <FaInstagram />
                            </a>
                        </li>

                        <li>
                            <a href={`mailto:${email}`} className="cursor-pointer">
    <CiMail />
</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Contact;