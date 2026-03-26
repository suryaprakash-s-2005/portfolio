import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiAward, FiFilter } from 'react-icons/fi';

const certificationsData = [
    // Programming
    {
        title: "Programming in C",
        issuer: "NPTEL",
        domain: "Programming",
        description: "Mastering procedural programming, memory management, and pointers in C.",
        image: "/certificates/introduction-to-programming-in-c-nptel.jpg"
    },
    {
        title: "Crash Course on Python",
        issuer: "Google",
        domain: "Programming",
        description: "Foundational Python programming focusing on syntax, data structures, and automation.",
        image: "/certificates/crash-course-on-python-google.jpg"
    },
    {
        title: "Python (Basic)",
        issuer: "HackerRank",
        domain: "Programming",
        description: "Problem-solving and algorithmic challenges implemented in Python.",
        image: "/certificates/python-basic-hackerrank.jpg"
    },
    {
        title: "Fundamentals of Java Programming",
        issuer: "Board Infinity",
        domain: "Programming",
        description: "Core Java concepts including OOPs, exception handling, and collections.",
        image: "/certificates/fundamentals-of-java-programming-board-infinity.jpg"
    },
    {
        title: "Java Programming",
        issuer: "Great Learning",
        domain: "Programming",
        description: "Essential Java programming skills for building robust enterprise applications.",
        image: "/certificates/java-programming-great-learning.jpg"
    },
    {
        title: "Frontend for Java Fullstack",
        issuer: "Board Infinity",
        domain: "Programming",
        description: "Building responsive user interfaces tailored for Java-based backend integration.",
        image: "/certificates/frontend-for-java-fullstack-development-board-infinity.jpg"
    },
    // Data & Databases
    {
        title: "Introduction to SQL",
        issuer: "University of Michigan",
        domain: "Data & Databases",
        description: "Database queries, data manipulation, and relational database design.",
        image: "/certificates/introduction-to-sql-university-of-michigan.jpg"
    },
    {
        title: "MongoDB",
        issuer: "MongoDB",
        domain: "Data & Databases",
        description: "NoSQL database architecture, CRUD operations, and data modeling.",
        image: "/certificates/mongodb.jpg"
    },
    {
        title: "Data Science for Beginners",
        issuer: "Board Infinity",
        domain: "Data & Databases",
        description: "Introduction to data analysis, visualization, and statistical modeling.",
        image: "/certificates/datascience-for-beginners-board-infinity.jpg"
    },
    {
        title: "Power BI Data Analyst",
        issuer: "Microsoft",
        domain: "Data & Databases",
        description: "Data visualization, dashboard creation, and business intelligence reporting.",
        image: "/certificates/power-bi-data-analyst-microsoft.jpg"
    },
    // Cloud & Security
    {
        title: "Cloud Computing",
        issuer: "NPTEL",
        domain: "Cloud & Security",
        description: "In-depth course covering cloud architecture, services, and deployment models.",
        image: "/certificates/cloud-computing-nptel.jpg"
    },
    {
        title: "Ethical Hacking",
        issuer: "NPTEL",
        domain: "Cloud & Security",
        description: "Understanding network vulnerabilities, penetration testing, and securing systems.",
        image: "/certificates/ethical-hacking-nptel.jpg"
    },
    {
        title: "Cybersecurity for Beginners",
        issuer: "Microsoft",
        domain: "Cloud & Security",
        description: "Core concepts of information security, threat landscapes, and mitigation strategies.",
        image: "/certificates/cybersecurity-for-beginners-microsoft.jpg"
    },
    // Testing
    {
        title: "Software Testing",
        issuer: "NPTEL",
        domain: "Testing",
        description: "Quality assurance, test case generation, and automated testing methodologies.",
        image: "/certificates/software-testing-nptel.jpg"
    },
    // Enterprise & Automation
    {
        title: "Automation Business Analyst Training",
        issuer: "UiPath",
        domain: "Enterprise & Automation",
        description: "Comprehensive training on RPA business analysis and automation workflows.",
        image: "/certificates/automation-business-analyst-training-uipath.jpg"
    },
    {
        title: "SAP ABAP Platform Fundamentals",
        issuer: "SAP",
        domain: "Enterprise & Automation",
        description: "Core principles of SAP development and ABAP programming environment.",
        image: "/certificates/sap-abap-platform-fundamentals-sap.jpg"
    }
];

const categories = ["All", "Programming", "Data & Databases", "Cloud & Security", "Testing", "Enterprise & Automation"];

const Certifications = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredCerts = certificationsData.filter(cert => 
        activeTab === "All" || cert.domain === activeTab
    );

    return (
        <section id="certifications" className="py-20 px-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <div className="flex items-center gap-4 flex-grow">
                            <h2 className="text-3xl md:text-4xl font-bold">Licenses & Certifications</h2>
                            <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow rounded-full hidden md:block"></div>
                        </div>

                        {/* Filter Categories */}
                        <div className="flex flex-wrap items-center gap-2">
                            <FiFilter className="text-gray-400 mr-2" />
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveTab(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        activeTab === category
                                            ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none"
                                            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div 
                        layout 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredCerts.map((cert) => (
                                <motion.div
                                    layout
                                    key={cert.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all flex flex-col h-full group overflow-hidden"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative h-44 w-full bg-indigo-50 dark:bg-indigo-900/20 overflow-hidden flex items-center justify-center">
                                        <img 
                                            src={cert.image} 
                                            alt={cert.title}
                                            onError={(e) => { 
                                                e.target.onerror = null; 
                                                e.target.src = `https://placehold.co/600x400/e0e7ff/4f46e5?text=${cert.issuer.replace(/ /g, '+')}`;
                                            }}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        
                                        {/* Hover Overlay with View Certificate Button */}
                                        <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                            <a 
                                                href={cert.image} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300"
                                            >
                                                View Certificate <FiExternalLink />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <FiAward className="text-yellow-500 flex-shrink-0" />
                                                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider line-clamp-1">
                                                    {cert.issuer}
                                                </span>
                                            </div>
                                            <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md line-clamp-1">
                                                {cert.domain}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                                            {cert.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow line-clamp-3">
                                            {cert.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
