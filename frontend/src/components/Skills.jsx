import React from 'react';
import { motion } from 'framer-motion';
import {
    SiCplusplus, SiC, SiJavascript, SiPython,
    SiMongodb, SiExpress, SiReact, SiNodedotjs, SiHtml5, SiPhp,
    SiMysql, SiGit, SiGithub, SiUnity, SiAndroidstudio, SiXampp,
    SiTailwindcss, SiCanva, SiFigma, SiR, SiPostman
} from 'react-icons/si';
import { TbApi, TbBrandCSharp } from 'react-icons/tb';
import { FaJava, FaCss3Alt, FaCode } from 'react-icons/fa';
import { GrOracle } from 'react-icons/gr';

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "C/C++", icon: <SiCplusplus /> },
            { name: "Java", icon: <FaJava /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "Python", icon: <SiPython /> },
            { name: "C#", icon: <TbBrandCSharp /> },
            { name: "R", icon: <SiR className="text-blue-500" /> }
        ]
    },
    {
        title: "Web Technologies",
        skills: [
            { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-white" /> },
            { name: "React.js", icon: <SiReact className="text-blue-400" /> },
            { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
            { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
            { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
            { name: "REST APIs", icon: <TbApi className="text-gray-600 dark:text-gray-300" /> }
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "Oracle DB", icon: <GrOracle className="text-red-500" /> }
        ]
    },
    {
        title: "Tools & Environments",
        skills: [
            { name: "Git", icon: <SiGit className="text-orange-600" /> },
            { name: "GitHub", icon: <SiGithub className="text-gray-800 dark:text-white" /> },
            { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
            { name: "Canva", icon: <SiCanva className="text-cyan-500" /> },
            { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
            { name: "Unity", icon: <SiUnity className="text-gray-800 dark:text-white" /> },
            { name: "Android Studio", icon: <SiAndroidstudio className="text-green-500" /> },
            { name: "XAMPP", icon: <SiXampp className="text-orange-500" /> },
            { name: "Postman", icon: <SiPostman className="text-orange-600" /> }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
                        <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm"
                            >
                                <h3 className="text-xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {category.skills.map((skill, sIndex) => (
                                        <div
                                            key={sIndex}
                                            className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-xl text-sm font-medium border border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-md transition-all group cursor-default"
                                        >
                                            <span className="text-3xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                                            <span className="text-gray-700 dark:text-gray-300 font-semibold">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
