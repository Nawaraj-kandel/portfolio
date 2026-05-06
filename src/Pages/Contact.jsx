import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
    });

    const email = "kandeln307@gmail.com";
    const phone = "+977 9818081274";

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

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
            setFormData({ firstname: "", lastname: "", email: "", subject: "", message: "" });
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        });
    };

    return (
        <section className="py-20 md:py-32 bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
            <div className="container px-4">
                <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
                    {/* Left Section - Contact Info */}
                    <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
                        <div className="text-center lg:text-left">
                            <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl text-slate-950 dark:text-slate-100">
                                Contact Me
                            </h1>
                            <p className="text-slate-700 dark:text-slate-300">
                                We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!
                            </p>
                        </div>
                        <div className="mx-auto w-fit lg:mx-0">
                            <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left text-slate-950 dark:text-slate-100">
                                Contact Details
                            </h3>
                            <ul className="ml-4 list-disc space-y-2 text-slate-700 dark:text-slate-300">
                                <li>
                                    <span className="font-bold">Phone: </span>
                                    <a href={`tel:${phone}`} className="hover:text-sky-500">
                                        {phone}
                                    </a>
                                </li>
                                <li>
                                    <span className="font-bold">Email: </span>
                                    <a href={`mailto:${email}`} className="underline hover:text-sky-500">
                                        {email}
                                    </a>
                                </li>
                                <li>
                                    <span className="font-bold">Social: </span>
                                    <ul className="mt-3 flex space-x-4 text-2xl">
                                        <li>
                                            <a href="https://www.linkedin.com/in/nawaraj-kandel/" className="hover:text-sky-500">
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/Nawaraj-kandel" className="hover:text-sky-500">
                                                <FaGithub />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/nawaraj.kandel_" className="hover:text-sky-500">
                                                <FaInstagram />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div className="mx-auto w-full flex max-w-screen-md flex-col gap-6 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-10 shadow-lg">
                        {success && (
                            <div className="rounded-lg bg-green-50 dark:bg-green-950 p-4 text-center text-green-600 dark:text-green-400 font-medium">
                                Message sent successfully! Thank you for reaching out.
                            </div>
                        )}

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="flex gap-4 mb-4">
                                <div className="grid w-full items-center gap-1.5">
                                    <label htmlFor="firstname" className="text-sm font-bold text-slate-950 dark:text-slate-100">First Name</label>
                                    <input 
                                        type="text" 
                                        id="firstname" 
                                        name="firstname"
                                        placeholder="First Name"
                                        value={formData.firstname}
                                        onChange={handleInputChange}
                                        className="flex h-10 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-slate-100"
                                        required
                                    />
                                </div>
                                <div className="grid w-full items-center gap-1.5">
                                    <label htmlFor="lastname" className="text-sm font-bold text-slate-950 dark:text-slate-100">Last Name</label>
                                    <input 
                                        type="text" 
                                        id="lastname" 
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={formData.lastname}
                                        onChange={handleInputChange}
                                        className="flex h-10 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-slate-100"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid w-full items-center gap-1.5 mb-4">
                                <label htmlFor="email" className="text-sm font-bold text-slate-950 dark:text-slate-100">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="flex h-10 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-slate-100"
                                    required
                                />
                            </div>
                            <div className="grid w-full items-center gap-1.5 mb-4">
                                <label htmlFor="subject" className="text-sm font-bold text-slate-950 dark:text-slate-100">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="flex h-10 w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-slate-100"
                                    required
                                />
                            </div>
                            <div className="grid w-full gap-1.5 mb-6">
                                <label htmlFor="message" className="text-sm font-bold text-slate-950 dark:text-slate-100">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    placeholder="Type your message here."
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="5"
                                    className="flex min-h-[80px] w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-slate-100"
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="w-full bg-slate-900 dark:bg-sky-600 hover:bg-slate-700 dark:hover:bg-sky-700 text-white font-bold py-3 rounded-md transition duration-300 disabled:opacity-50"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;