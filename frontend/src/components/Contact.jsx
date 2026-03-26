import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiSend, FiLoader } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { apiUrl } from '../config/api';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        const formData = new FormData(form.current);
        const data = {
            name: formData.get('user_name'),
            email: formData.get('user_email'),
            message: formData.get('message')
        };

        try {
            // 1. Save to Backend (MongoDB)
            const backendRes = await fetch(apiUrl('/api/contact'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (!backendRes.ok) {
                throw new Error('Failed to save message to database');
            }

            // 2. Send via EmailJS (Optional/If keys are set)
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (serviceId && templateId && publicKey) {
                await emailjs.sendForm(
                    serviceId,
                    templateId,
                    form.current,
                    publicKey
                );
            } else {
                console.warn('EmailJS keys missing - message saved to DB only.');
            }

            setIsSubmitting(false);
            setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
            e.target.reset();

        } catch (error) {
            setIsSubmitting(false);
            setStatus({ type: 'error', message: 'An error occurred. Please try again or email me directly.' });
            console.error('Contact Error:', error);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
                        <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-5 gap-12">
                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    I'm currently open to new opportunities, freelance projects, and exciting collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                                </p>
                                <a
                                    href="mailto:suryaprakashsbe@gmail.com"
                                    className="inline-flex items-center gap-3 text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                                >
                                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
                                        <FiMail size={24} />
                                    </div>
                                    suryaprakashsbe@gmail.com
                                </a>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Social Profiles</h4>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/surya-prakash-s-cse/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all" aria-label="LinkedIn">
                                        <FaLinkedin size={28} />
                                    </a>
                                    <a href="https://github.com/suryaprakash-s-2005" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all" aria-label="GitHub">
                                        <FaGithub size={28} />
                                    </a>
                                    <a href="https://www.instagram.com/surya._.jc/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-500 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all" aria-label="Instagram">
                                        <FaInstagram size={28} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <form ref={form} onSubmit={sendEmail} className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-lg">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            id="user_name"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            id="user_email"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="5"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-none ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 resize-none"
                                        placeholder="Hello Surya, I'd like to discuss a project..."
                                    ></textarea>
                                </div>

                                {status.message && (
                                    <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400'}`}>
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <><FiLoader className="animate-spin" size={20} /> Sending...</>
                                    ) : (
                                        <><FiSend size={20} /> Send Message</>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
