import Me from "../assets/Me.png";
const Navbar = () => {
    return (
        <>
            <div className=" max-w-screen mx-auto p-6 shadow-xl  md:px-12 ">
                <div className="flex justify-between">
                    <div className="flex space-x-2 text-lg ">
                        <img src={Me} className="w-12 h-12 rounded-full" alt="Nawaraj's photo" />
                        <h1 className="font-semibold text-xl cursor-pointer">Nawaraj
                            <p className="text-sm">Web Developer</p>
                        </h1>
                    </div>

                    <div>
                        <ul className=" flex space-x-10 text-lg">
                            <li>Home</li>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar