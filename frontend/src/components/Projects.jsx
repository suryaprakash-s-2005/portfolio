import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiImage, FiX } from 'react-icons/fi';

const projects = [
    {
        title: "PixelFeed",
        description: "A MERN stack website which lets users create images using AI or manual upload and post them to a community feed. Features liking, downloading, and customizable profiles.",
        tech: ["MERN Stack", "Cloudflare AI", "Tailwind CSS"],
        github: "https://github.com/suryaprakash-s-2005/PixelFeed",
        live: "https://pixelfeed.vercel.app/",
        image: "/projects/pixelfeed.png"
    },
    {
        title: "BudgetPal",
        description: "A website built using React to track day-to-day expenses. Uses Chart.js for data visualization and Local Storage for saving income/expense data.",
        tech: ["React.js", "Node.js", "JavaScript", "Chart.js"],
        github: "https://github.com/suryaprakash-s-2005/BudgetPal",
        live: "https://thebudgetpal.vercel.app/",
        image: "/projects/budgetpal.png"
    },
    {
        title: "Recipe Finder",
        description: "Lets users search for meals, read their recipes, and add meals to their favorites. Built entirely with React and TheMealDB API.",
        tech: ["React.js", "Node.js", "JavaScript", "TheMealDB API"],
        github: "https://github.com/suryaprakash-s-2005/Recipe-Finder",
        live: "https://findrecipes.vercel.app/",
        image: "/projects/recipe-finder.png"
    },
    {
        title: "IMDb's Broke Clone",
        description: "Movie search engine using the OMDb API. Read short storylines and add movies to favorites efficiently without requiring a backend.",
        tech: ["React.js", "Node.js", "JavaScript", "OMDb API"],
        github: "https://github.com/suryaprakash-s-2005/IMDb-Broke-Clone",
        live: "https://imdb-broke-clone.vercel.app/",
        image: "/projects/imdb-broke-clone.png"
    },
    {
        title: "PlanIt",
        description: "A minimalist and highly functional To-Do list application utilizing Local Storage for seamless and persistent task management.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        github: "https://github.com/suryaprakash-s-2005/PlanIt",
        live: "https://planit-jarvis.vercel.app/",
        image: "/projects/planit.png"
    },
    {
        title: "MeteoMate",
        description: "Real-time weather website offering highly accurate forecasts powered directly by the OpenWeather API.",
        tech: ["HTML5", "CSS3", "JavaScript", "OpenWeather"],
        github: "https://github.com/suryaprakash-s-2005/MeteoMate",
        live: "https://meteo-mate.vercel.app/",
        image: "/projects/meteomate.png"
    },
    {
        title: "Calculator",
        description: "A sleek, fully functional web-based calculator integrating essential mathematical operations.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        github: "https://github.com/suryaprakash-s-2005/Calculator",
        live: "https://cantmathtoday.vercel.app/",
        image: "/projects/calculator.png"
    },
    {
        title: "Offroad Odyssey",
        description: "An immersive 3D car simulator created to deliver an excellent offroad racing experience.",
        tech: ["Unity3D", "C#"],
        github: "https://github.com/suryaprakash-s-2005/Offroad-Odyssey",
        live: "", // Unity projects might not have a web live link
        image: "/projects/offroad-odyssey.png"
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    return (
        <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
                        <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedProject(project)}
                                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all flex flex-col h-full group overflow-hidden cursor-pointer"
                            >
                                {/* Project Thumbnail */}
                                <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        onError={(e) => { 
                                            e.target.onerror = null; 
                                            e.target.src = `https://placehold.co/600x400/e0e7ff/4f46e5?text=${project.title.replace(/ /g, '+')}`;
                                        }}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Hover Overlay with Expand Message */}
                                    <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                        <span className="px-4 py-2 bg-indigo-500 text-white font-medium rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300">
                                            Click to Expand
                                        </span>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-2 ml-2">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-full transition-colors z-10" aria-label="GitHub Repository">
                                                    <FiGithub size={18} />
                                                </a>
                                            )}
                                            {project.live && (
                                                <a href={project.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-full transition-colors z-10" aria-label="Live Demo">
                                                    <FiExternalLink size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 px-2.5 py-1 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Full-Screen Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
                        onClick={() => setSelectedProject(null)}
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-[110] p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-colors"
                            >
                                <FiX size={24} />
                            </button>

                            {/* Scrollable Container */}
                            <div className="overflow-y-auto w-full h-full flex flex-col">
                                {/* Big Image Preview */}
                                <div className="w-full h-64 sm:h-80 md:h-[400px] bg-gray-200 dark:bg-gray-800 flex-shrink-0 relative">
                                    <img 
                                        src={selectedProject.image} 
                                        alt={selectedProject.title}
                                        onError={(e) => { 
                                            e.target.onerror = null; 
                                            e.target.src = `https://placehold.co/1200x800/e0e7ff/4f46e5?text=${selectedProject.title.replace(/ /g, '+')}`;
                                        }}
                                        className="w-full h-full object-cover object-top"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                                    <h2 className="absolute bottom-6 left-6 right-6 text-3xl sm:text-4xl font-bold text-white drop-shadow-md">
                                        {selectedProject.title}
                                    </h2>
                                </div>

                                {/* Project Details */}
                                <div className="p-6 sm:p-8 flex flex-col flex-grow bg-white dark:bg-gray-900">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800 px-4 py-1.5 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <div className="flex items-center gap-3">
                                            {selectedProject.github && (
                                                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-xl transition-colors">
                                                    <FiGithub size={20} /> Code
                                                </a>
                                            )}
                                            {selectedProject.live && (
                                                <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors shadow-lg shadow-indigo-200 dark:shadow-none">
                                                    <FiExternalLink size={20} /> Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                                            About this project
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                            {selectedProject.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
