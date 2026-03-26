import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="pt-16 pb-8 px-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 border-t-4 border-t-indigo-500">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                    
                    {/* Brand & Tagline */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Surya Prakash S.</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                            Thanks for visiting my portfolio!
                        </p>
                    </div>

                    {/* Quick Navigation */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">Navigation</h4>
                        <nav className="grid grid-cols-2 gap-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 w-fit transition-colors">Home</Link>
                            <Link to="/experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 w-fit transition-colors">Experience</Link>
                            <Link to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 w-fit transition-colors">About</Link>
                            <Link to="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 w-fit transition-colors">Projects</Link>
                            <Link to="/skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 w-fit transition-colors">Skills</Link>
                            <Link to="/stats" className="hover:text-indigo-600 dark:hover:text-indigo-400 w-fit transition-colors">Coding Stats</Link>
                            <Link to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 w-fit transition-colors col-span-2">Contact</Link>
                        </nav>
                    </div>

                    {/* Reach Out */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">Get in Touch</h4>
                        <div className="flex items-center gap-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-500">
                                <FiMail size={18} />
                            </div>
                            <a href="mailto:suryaprakashsbe@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">suryaprakashsbe@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium text-gray-500 dark:text-gray-400">
                            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-500">
                                <FiMapPin size={18} />
                            </div>
                            <span>India</span>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200 dark:bg-gray-800 w-full mb-8"></div>

                {/* Bottom Row - Social & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center md:text-left">
                        &copy; {currentYear} Surya Prakash S. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="https://www.linkedin.com/in/surya-prakash-s-cse/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800 rounded-xl transition-all shadow-sm hover:shadow" aria-label="LinkedIn">
                            <FaLinkedin size={18} />
                        </a>
                        <a href="https://github.com/suryaprakash-s-2005" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 rounded-xl transition-all shadow-sm hover:shadow" aria-label="GitHub">
                            <FaGithub size={18} />
                        </a>
                        <a href="https://www.instagram.com/surya._.jc/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:border-pink-200 dark:hover:border-pink-800 rounded-xl transition-all shadow-sm hover:shadow" aria-label="Instagram">
                            <FaInstagram size={18} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
