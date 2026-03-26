import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiDownloadCloud } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen relative flex items-center justify-center pt-24 pb-32 px-4">
            <div className="max-w-4xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Surya Prakash S.</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                        A highly motivated Software Engineering professional and Full-Stack MERN Developer building scalable, user-centric web applications.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        to="/projects"
                        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-indigo-500/30 w-full sm:w-auto justify-center"
                    >
                        View My Work <FiArrowRight />
                    </Link>
                    <Link
                        to="/contact"
                        className="flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-sm w-full sm:w-auto justify-center"
                    >
                        Contact Me <FiMail />
                    </Link>
                    <a
                        href="/resume.pdf"
                        download="Surya_Prakash_Resume.pdf"
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white border border-transparent px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
                    >
                        Resume <FiDownloadCloud />
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{
                            y: [0, 12, 0]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5
                        }}
                        className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
