import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiExternalLink, FiX } from 'react-icons/fi';

const experiences = [
    
    {
        role: "Game Design & Development Intern",
        company: "MSME Technology Development Centre",
        date: "Jun 2025",
        description: "Worked on Game Design and Development using Unity 3D at MSME Technology Development Centre, where I learned the fundamentals of game mechanics, scene creation, asset integration, and basic scripting for interactive gameplay.",
        certificate: "/internships/msme-unity-intern.jpg"
    },
    {
        role: "Front-End Development Intern",
        company: "Cognifyz Technologies",
        date: "Mar 2025 - Apr 2025",
        description: "Worked as a Front-End Development Intern at Cognifyz Technologies, building responsive and interactive web interfaces using modern web technologies. Gained hands-on experience in UI development, debugging, and improving website usability while collaborating on practical development tasks.",
        certificate: "/internships/cognifyz-frontend-intern.jpg"
    },
    {
        role: "Full Stack Development Intern",
        company: "Marcello Tech",
        date: "Jul 2024 - Sept 2024",
        description: "Completed a 2-month internship in Full Stack Development at Marcello Tech in collaboration with AICTE. Gained hands-on experience in building dynamic web applications using HTML, CSS, JavaScript, and the MERN stack (MongoDB, Express.js, React.js, Node.js). Worked on developing responsive user interfaces, integrating APIs, managing databases, and understanding the end-to-end web development workflow.",
        certificate: "/internships/marcellotech-fullstackdev-intern.jpg"
    },
    {
        role: "Essential Python Skills Intern",
        company: "Marcello Tech",
        date: "Nov 2023",
        description: "Gained core proficiency in Python programming, focusing on data structures, algorithms, and application logic.",
        certificate: "/internships/marcellotech-python-intern.jpg"
    }
];

const Experience = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
                        <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl group-hover:scale-110 transition-transform">
                                        <FiBriefcase size={24} />
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        <FiCalendar className="mr-2" />
                                        {exp.date}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {exp.role}
                                </h3>
                                <h4 className="text-md font-medium text-gray-600 dark:text-gray-400 mb-4">
                                    @ {exp.company}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                                    {exp.description}
                                </p>
                                
                                {exp.certificate && (
                                    <div className="mt-auto">
                                        {/* Thumbnail Preview */}
                                        <div 
                                            className="w-full h-32 mb-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer relative group/thumb"
                                            onClick={() => setSelectedCert(exp.certificate)}
                                        >
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity z-10 flex items-center justify-center backdrop-blur-[2px]">
                                                <span className="text-white text-sm font-semibold flex items-center gap-2">
                                                    <FiExternalLink /> Click to Expand
                                                </span>
                                            </div>
                                            <img 
                                                src={exp.certificate} 
                                                alt={`${exp.company} Certificate Thumbnail`} 
                                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-110"
                                            />
                                        </div>

                                        <button
                                            onClick={() => setSelectedCert(exp.certificate)}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors group/btn"
                                        >
                                            View Full Certificate
                                            <FiExternalLink className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Full-Screen Lightbox Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
                    >
                        {/* Close button */}
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCert(null);
                            }}
                        >
                            <FiX size={28} />
                        </motion.button>

                        {/* Image container */}
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={selectedCert}
                            alt="Certificate Preview"
                            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-default"
                            onClick={(e) => e.stopPropagation()} 
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;
