import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiHackerrank, SiCplusplus, SiPython, SiC, SiJavascript, SiMysql } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiTrendingUp, FiActivity, FiStar, FiCheckCircle, FiAward } from 'react-icons/fi';
import { apiUrl } from '../config/api';

const HrIconMap = {
    'C++': SiCplusplus,
    'Python': SiPython,
    'C': SiC,
    'JavaScript': SiJavascript,
    'Java': FaJava,
    'SQL': SiMysql,
    'SQL (Advanced)': SiMysql,
    'SQL (Intermediate)': SiMysql,
    'SQL (Basic)': SiMysql,
    'Problem Solving': FiAward
};

const CodingStats = () => {
    const [stats, setStats] = useState({
        leetcode: { solved: 'Loading...', ranking: 'Loading...', badges: [], calendar: {} },
        hackerrank: { badges: [], stars: 'Loading...' }
    });

    useEffect(() => {
        fetch(apiUrl('/api/stats'))
            .then(res => res.json())
            .then(data => {
                if (!data.error) setStats(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <section id="stats" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Coding Stats</h2>
                        <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* LeetCode Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <SiLeetcode size={120} />
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-yellow-500/20 text-yellow-600 dark:text-yellow-500 rounded-xl">
                                    <SiLeetcode size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">LeetCode</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Problem Solving & Algorithms</p>
                                </div>
                            </div>
                            <div className="flex justify-center w-full">
                                <a href="https://leetcode.com/u/Surya_Prakash_S_CSE/" target="_blank" rel="noreferrer" className="w-full hover:opacity-90 transition-opacity">
                                    <img
                                        src="https://leetcard.jacoblin.cool/Surya_Prakash_S_CSE?theme=dark&ext=heatmap"
                                        alt="LeetCode Stats"
                                        className="w-full rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 block dark:hidden"
                                        style={{ content: 'url("https://leetcard.jacoblin.cool/Surya_Prakash_S_CSE?ext=heatmap")' }}
                                    />
                                    <img
                                        src="https://leetcard.jacoblin.cool/Surya_Prakash_S_CSE?theme=dark&ext=heatmap"
                                        alt="LeetCode Stats"
                                        className="w-full rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hidden dark:block"
                                    />
                                </a>
                            </div>
                        </motion.div>

                        {/* HackerRank Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <SiHackerrank size={120} />
                            </div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-green-500/20 text-green-600 dark:text-green-500 rounded-xl">
                                    <SiHackerrank size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">HackerRank</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Competitive Programming</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-center justify-between">
                                    <div>
                                        <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">Total Stars</div>
                                        <div className="flex gap-1 text-yellow-500">
                                            <FiStar fill="currentColor" />
                                            <FiStar fill="currentColor" />
                                            <FiStar fill="currentColor" />
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-green-500">{stats.hackerrank.stars}</div>
                                </div>
                                <div className="col-span-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-3 flex items-center justify-between">
                                        <div className="flex items-center gap-2"><FiAward className="text-indigo-500" /> Badges ({stats.hackerrank.badges?.length || 0})</div>
                                        <a href="https://www.hackerrank.com/profile/4160suryaprakash" target="_blank" rel="noreferrer" className="text-xs font-bold text-indigo-500 hover:underline">View Profile</a>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        {Array.isArray(stats.hackerrank.badges) && stats.hackerrank.badges.map((badge, idx) => {
                                            const IconComponent = HrIconMap[badge.name] || FiAward;
                                            return (
                                                <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-100 dark:border-gray-700 w-24 bg-gray-50 dark:bg-gray-800">
                                                    {badge.icon ? (
                                                        <img src={badge.icon} alt={badge.name} className="w-10 h-10 object-contain mb-2 hover:scale-110 transition-transform" />
                                                    ) : (
                                                        <div className="w-10 h-10 flex items-center justify-center mb-2 text-green-500 hover:scale-110 transition-transform">
                                                            <IconComponent size={32} />
                                                        </div>
                                                    )}
                                                    <span className="text-[10px] text-center text-gray-600 dark:text-gray-400 leading-tight w-full font-semibold">{badge.name}</span>
                                                    <div className="flex gap-0.5 mt-2 text-green-500 text-[8px]">
                                                        {Array.from({ length: badge.stars }).map((_, i) => (
                                                            <FiStar key={i} fill="currentColor" />
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CodingStats;
