import { useState } from 'react';
import portfolio from '../assets/portfolio.jpg';
import traffic from '../assets/traffic.jpg';

const projects = [
  {
    id: 1,
    title: 'Flight Price Prediction System',
    description:
      'Our Flight Price Prediction and Booking System is a web-based platform that predicts flight fares based on user input like origin, destination, date, and time. Developed using React. It ensures accurate price forecasts and a smooth booking experience. The system includes secure login/signup features, admin dashboard, and validation mechanisms. It also allows users to book or cancel flights, ensuring full functionality from price prediction to final ticket management.',
    image:
      'data:image/jpeg;base64,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',
    githubLink: 'https://github.com/Nawaraj-kandel/Flight-price-prediction-system',
  },
  {
    id: 2,
    title: 'Waste Management System',
    description: 'The Waste Management System is an e-Governance solution designed to streamline and digitalize the collection, tracking, and disposal of waste. It enables real-time monitoring of waste bins, route optimization for garbage trucks, and citizen participation through complaint and feedback portals. The system enhances transparency, accountability, and operational efficiency for municipal bodies. Built with web and mobile platforms, it supports data-driven decision-making for cleaner, smarter cities.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GGFLxUNcLbNqUgXoGuZ1F9YG0puEksa3DA&s',
    githubLink: 'https://github.com/Nawaraj-kandel/E-Governance',
  },
  
  {
    id: 3,
    title: 'E-commerce Website',
    description: 'The E-commerce Website is a comprehensive online shopping platform that allows users to browse, search, and purchase products seamlessly. It features user authentication, product categorization, a shopping cart, and secure payment processing. The website is designed for both desktop and mobile devices, ensuring a responsive and user-friendly experience. Admin functionalities include product management, order tracking, and customer support, making it a complete solution for online retail.',
    image: 'https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FWhat_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg&w=4500&q=90',
    githubLink: 'https://github.com/Nawaraj-kandel/Ecommerce-website',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'The Portfolio Website is a personal showcase designed to highlight skills, projects, and professional achievements. It features a clean, modern design with sections for an introduction, project gallery, resume, and contact information. The website is fully responsive, ensuring optimal viewing on both desktop and mobile devices. It serves as a digital business card, allowing potential employers or clients to easily view work samples and get in touch.',
    image: portfolio,
    githubLink: 'https://github.com/Nawaraj-kandel/portfolio'
  },
  {
    id: 5,
    title: 'C-project-in-car-and-traffic-light',
    description: 'A C-based simulation project that models car movement and traffic light control to demonstrate traffic flow management at intersections.',
    image: traffic,
    githubLink: 'https://github.com/Nawaraj-kandel/C-project-in-car-and-traffic-light',
  },

  {
    id: 6,
    title: 'Facebook Clone',
    description: 'The facebook clone is done using the html and tailwind css classes and fonts This clone is created using tailwind.This simply represent the login page of facebook only in desktop mode and the clone is only design for desktop mode with no-responsiveness in Mobile and others devices',
    image: 'https://camo.githubusercontent.com/2d3f7e99b005a7c3982f56a567ea749d00eff006a6f9c59a5f66400eebee2b92/68747470733a2f2f692e6962622e636f2f774377426d357a2f53637265656e73686f742d323032332d30382d31322d3135313332392e706e67',
    githubLink: 'https://github.com/Nawaraj-kandel/facebook-clone',
  },

  {
      id: 7,
      title: 'Webapge frontend demo',
      description: 'This is a webpage using only the available bootstrap The project structure is organized as follows: index.html: The main HTML file containing the structure of the website. css/style.css: Custom CSS styles for the website. images/: Folder containing images used in the website.',
      image:'data:image/jpeg;base64,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',
      githubLink: 'https://github.com/Nawaraj-kandel/webpage-frontend',
  },

];

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-gray-100 pt-28 pb-40 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-80 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-30 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">
                {expanded[project.id]
                  ? project.description
                  : `${project.description.substring(0, 100)}...`}
              </p>
              <button
                onClick={() => toggleExpand(project.id)}
                className="text-black hover:underline"
              >
                {expanded[project.id] ? 'Show Less' : 'See More'}
              </button>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-black text-white text-center px-4 py-2 rounded mt-4 hover:bg-blue-600 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;