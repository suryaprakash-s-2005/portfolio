import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiBookOpen, FiCpu, FiUsers, FiGlobe, FiDownloadCloud } from 'react-icons/fi';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
                        <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        
                        {/* Profile Image */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="flex items-center justify-center lg:justify-start lg:col-span-1"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full transform translate-x-3 translate-y-3 opacity-30 dark:opacity-20 blur-sm transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full opacity-10 transform -translate-x-2 -translate-y-2"></div>
                                <img 
                                    src="/surya-prakash.jpeg" 
                                    alt="Surya Prakash S" 
                                    className="relative w-64 h-64 md:w-72 md:h-72 object-cover object-top rounded-full border-4 border-white dark:border-gray-900 shadow-xl z-10"
                                />
                            </div>
                        </motion.div>

                        {/* About Me */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm lg:col-span-2 flex flex-col justify-center"
                        >
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl">
                                        <FiTarget size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">About Me</h3>
                                </div>
                                <a 
                                    href="/resume.pdf" 
                                    download="Surya_Prakash_Resume.pdf"
                                    className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    <FiDownloadCloud size={18} /> Download Resume
                                </a>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6 sm:mb-0">
                                I'm a highly motivated and innovative Computer Science engineering student seeking a challenging role as a Software Developer. I'm deeply passionate about building scalable, user-centric web applications and modern software architectures. My goal is to leverage my expertise in the MERN stack and creative problem-solving skills to drive impactful technical solutions within a dynamic, forward-thinking organization.
                            </p>

                            {/* Mobile Download Button */}
                            <a 
                                href="/resume.pdf" 
                                download="Surya_Prakash_Resume.pdf"
                                className="sm:hidden flex w-full justify-center items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full transition-all shadow-md"
                            >
                                <FiDownloadCloud size={18} /> Download Resume
                            </a>
                        </motion.div>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* Education */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl">
                                    <FiBookOpen size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
                            </div>
                            
                            <div className="flex-grow space-y-6">
                                <div className="relative pl-6 border-l-2 border-indigo-100 dark:border-indigo-900/50">
                                    <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white dark:ring-gray-900"></div>
                                    <h4 className="text-base font-bold text-gray-900 dark:text-white">B.E. Computer Science & Engineering <span className="text-indigo-500 dark:text-indigo-400 font-normal text-sm pl-1">(Pre-Final Year)</span></h4>
                                    <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-1 mt-1">Velammal College of Engineering and Technology, Madurai</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">2023 - 2027</p>
                                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 w-fit px-3 py-1 rounded-full">CGPA: 8.72 (up to 5th semester)</p>
                                </div>
                                <div className="relative pl-6 border-l-2 border-gray-100 dark:border-gray-800">
                                    <div className="absolute w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full -left-[7px] top-1.5 ring-4 ring-white dark:ring-gray-900"></div>
                                    <h4 className="text-base font-bold text-gray-900 dark:text-white">Higher Secondary (XII)</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1 mt-1">YWCA Matriculation Higher Secondary School, Madurai</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">2022 - 2023</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 italic">Subjects: Mathematics, Physics, Chemistry, Biology</p>
                                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 w-fit px-3 py-1 rounded-full">Percentage: 92.67%</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Technical Skills */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl">
                                    <FiCpu size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Skills</h3>
                            </div>
                            
                            <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-sm">
                                <li className="flex items-start gap-3">
                                    <span className="text-indigo-500 mt-1">▹</span>
                                    <div>
                                        <strong className="block text-gray-900 dark:text-white mb-1">Programming Languages</strong>
                                        C/C++, Java, Python, JavaScript, C#, R
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-indigo-500 mt-1">▹</span>
                                    <div>
                                        <strong className="block text-gray-900 dark:text-white mb-1">Web Technologies</strong>
                                        MERN Stack (MongoDB, Express.js, React, Node.js), HTML/CSS, PHP, REST APIs
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-indigo-500 mt-1">▹</span>
                                    <div>
                                        <strong className="block text-gray-900 dark:text-white mb-1">Databases</strong>
                                        MySQL, MongoDB
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-indigo-500 mt-1">▹</span>
                                    <div>
                                        <strong className="block text-gray-900 dark:text-white mb-1">Tools & Platforms</strong>
                                        Git, GitHub, VS Code, Postman, Unity, Android Studio, XAMPP
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-indigo-500 mt-1">▹</span>
                                    <div>
                                        <strong className="block text-gray-900 dark:text-white mb-1">Core Concepts</strong>
                                        Data Structures, Algorithms, OOP, DBMS, Operating Systems, Computer Networks
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Soft Skills & Languages */}
                        <div className="flex flex-col gap-8 h-full">
                            
                            {/* Soft Skills */}
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex-1 flex flex-col"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-2xl">
                                        <FiUsers size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Soft Skills</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Problem Solving', 'Team Collaboration', 'Adaptability', 'Time Management', 'Communication', 'Quick Learner'].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Languages Known */}
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex-1 flex flex-col"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-2xl">
                                        <FiGlobe size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Languages</h3>
                                </div>
                                <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-sm font-medium">
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-teal-500"></span> English (Professional)
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-teal-500"></span> Tamil (Native)
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-teal-500"></span> Telugu (Native)
                                    </li>
                                </ul>
                            </motion.div>

                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
