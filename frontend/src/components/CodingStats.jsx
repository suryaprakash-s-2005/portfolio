import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks, SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { FiStar, FiAward, FiUsers, FiBookOpen, FiGitBranch, FiTarget, FiBarChart2, FiActivity } from 'react-icons/fi';
import { apiUrl } from '../config/api';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { useGitHubContributions } from '../hooks/useGitHubContributions';
import { useGFGStats } from '../hooks/useGFGStats';

const HrIconMap = {
    'C++': SiHackerrank,
    'Python': SiHackerrank,
    'C': SiHackerrank,
    'JavaScript': SiHackerrank,
    'Java': SiHackerrank,
    'SQL': SiHackerrank,
    'SQL (Advanced)': SiHackerrank,
    'SQL (Intermediate)': SiHackerrank,
    'SQL (Basic)': SiHackerrank,
    'Problem Solving': FiAward
};

const CodingStats = () => {
    const [stats, setStats] = useState({
        leetcode: { solved: 'Loading...', ranking: 'Loading...', badges: [], calendar: {} },
        hackerrank: { badges: [], stars: 'Loading...' }
    });

    const github = useGitHubStats();
    const githubContrib = useGitHubContributions();
    const gfg = useGFGStats();

    useEffect(() => {
        fetch(apiUrl('/api/stats'))
            .then(res => res.json())
            .then(data => {
                if (!data.error) setStats(data);
            })
            .catch(err => console.error(err));
    }, []);

    const difficultyLevels = [
        { key: 'School', label: 'School', color: 'text-gray-500' },
        { key: 'Basic', label: 'Basic', color: 'text-green-500' },
        { key: 'Easy', label: 'Easy', color: 'text-emerald-400' },
        { key: 'Medium', label: 'Medium', color: 'text-yellow-500' },
        { key: 'Hard', label: 'Hard', color: 'text-red-500' },
    ];

    return (
        <section id="stats" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Profiles</h2>
                        <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {/* GitHub Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden flex flex-col"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <SiGithub size={120} />
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                {github.data?.avatar_url ? (
                                    <img src={github.data.avatar_url} alt="GitHub Avatar" className="w-16 h-16 rounded-full border-2 border-gray-200 dark:border-gray-600 flex-shrink-0" />
                                ) : (
                                    <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                                        <SiGithub size={32} className="text-gray-400" />
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">GitHub</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">suryaprakash-s-2005</p>
                                    {github.data?.bio && (
                                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 line-clamp-2">{github.data.bio}</p>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3 mb-6">
                                <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 text-center">
                                    <FiBookOpen className="inline-block text-indigo-500 mb-1" size={18} />
                                    <div className="text-xl font-bold text-gray-900 dark:text-white">{github.data?.public_repos ?? (github.loading ? '...' : '—')}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Repos</div>
                                </div>
                                <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 text-center">
                                    <FiActivity className="inline-block text-green-500 mb-1" size={18} />
                                    <div className="text-xl font-bold text-gray-900 dark:text-white">{githubContrib.totalContributions != null ? `${githubContrib.totalContributions}+` : (githubContrib.loading ? '...' : '250+')}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Contributions</div>
                                </div>
                                <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 text-center">
                                    <FiUsers className="inline-block text-blue-500 mb-1" size={18} />
                                    <div className="text-xl font-bold text-gray-900 dark:text-white">{github.data?.followers ?? (github.loading ? '...' : '—')}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Followers</div>
                                </div>
                            </div>
                            <a href="https://github.com/suryaprakash-s-2005" target="_blank" rel="noreferrer" className="mt-auto flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white font-medium rounded-xl transition-colors">
                                <SiGithub size={18} /> View Profile
                            </a>
                        </motion.div>

                        {/* LinkedIn Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden flex flex-col"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <FaLinkedin size={120} />
                            </div>
                            <div className="flex flex-col items-center text-center mb-6">
                                <div className="w-20 h-20 rounded-full mb-4 bg-[#0A66C2]/10 flex items-center justify-center">
                                    <FaLinkedin size={40} className="text-[#0A66C2]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">LinkedIn</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Surya Prakash S</p>
                                <div className="mt-2 bg-white/60 dark:bg-gray-800/60 rounded-xl px-4 py-2">
                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Computer Science & Engineering</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 text-center">
                                    <FiUsers className="inline-block text-[#0A66C2] mb-1" size={18} />
                                    <div className="text-xl font-bold text-gray-900 dark:text-white">210+</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Connections</div>
                                </div>
                                <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 text-center">
                                    <FiActivity className="inline-block text-[#0A66C2] mb-1" size={18} />
                                    <div className="text-xl font-bold text-gray-900 dark:text-white">210+</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Followers</div>
                                </div>
                            </div>
                            <a href="https://www.linkedin.com/in/surya-prakash-s-cse/" target="_blank" rel="noreferrer" className="mt-auto flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-medium rounded-xl transition-colors">
                                <FaLinkedin size={18} /> Connect on LinkedIn
                            </a>
                        </motion.div>

                        {/* GeeksforGeeks Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden flex flex-col"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <SiGeeksforgeeks size={120} />
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                    <SiGeeksforgeeks size={32} className="text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">GeeksforGeeks</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">suryaprakashcse</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3 mb-4">
                                <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 text-center">
                                    <div className="text-xl font-bold text-green-500">{gfg.data?.totalProblemsSolved ?? (gfg.loading ? '...' : '—')}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Solved</div>
                                </div>
                                <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 text-center">
                                    <div className="text-xl font-bold text-gray-900 dark:text-white">{gfg.data?.codingScore ?? (gfg.loading ? '...' : '—')}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Score</div>
                                </div>
                                <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 text-center">
                                    <div className="text-xl font-bold text-gray-900 dark:text-white">{gfg.data?.rank ?? (gfg.loading ? '...' : '—')}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Institute Rank</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-5 gap-1 mb-4">
                                {difficultyLevels.map(({ key, label, color }) => (
                                    <div key={key} className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-2 text-center">
                                        <div className={`text-xs font-bold ${color}`}>{gfg.data?.[key] ?? (gfg.loading ? '...' : 0)}</div>
                                        <div className="text-[8px] text-gray-500 dark:text-gray-400 mt-0.5">{label}</div>
                                    </div>
                                ))}
                            </div>
                            <a href="https://www.geeksforgeeks.org/profile/suryaprakashcse" target="_blank" rel="noreferrer" className="mt-auto flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-colors">
                                <SiGeeksforgeeks size={18} /> View Profile
                            </a>
                        </motion.div>

                        {/* LeetCode Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden flex flex-col"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <SiLeetcode size={120} />
                            </div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-yellow-500/20 text-yellow-600 dark:text-yellow-500 rounded-xl flex-shrink-0">
                                    <SiLeetcode size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">LeetCode</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Problem Solving & Algorithms</p>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-center w-full mb-4">
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
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 text-center">
                                    <FiTarget className="inline-block text-yellow-500 mb-1" size={16} />
                                    <div className="text-lg font-bold text-gray-900 dark:text-white">{stats.leetcode.solved}</div>
                                    <div className="text-[10px] text-gray-500 dark:text-gray-400">Problems Solved</div>
                                </div>
                                <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 text-center">
                                    <FiBarChart2 className="inline-block text-indigo-500 mb-1" size={16} />
                                    <div className="text-lg font-bold text-gray-900 dark:text-white">{stats.leetcode.ranking}</div>
                                    <div className="text-[10px] text-gray-500 dark:text-gray-400">Global Rank</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* HackerRank Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden flex flex-col"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <SiHackerrank size={120} />
                            </div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-green-500/20 text-green-600 dark:text-green-500 rounded-xl flex-shrink-0">
                                    <SiHackerrank size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">HackerRank</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Competitive Programming</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 flex-1">
                                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                                    <div className="text-gray-500 dark:text-gray-400 text-xs mb-1">Total Stars</div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-1 text-yellow-500">
                                            <FiStar fill="currentColor" />
                                            <FiStar fill="currentColor" />
                                            <FiStar fill="currentColor" />
                                        </div>
                                        <span className="text-2xl font-bold text-green-500">{stats.hackerrank.stars}</span>
                                    </div>
                                </div>
                                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 dark:border-gray-700 flex-1">
                                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-3 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5"><FiAward className="text-indigo-500" size={14} /> Badges ({stats.hackerrank.badges?.length || 0})</div>
                                        <a href="https://www.hackerrank.com/profile/4160suryaprakash" target="_blank" rel="noreferrer" className="text-xs font-bold text-indigo-500 hover:underline">View Profile</a>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {Array.isArray(stats.hackerrank.badges) && stats.hackerrank.badges.map((badge, idx) => {
                                            const IconComponent = HrIconMap[badge.name] || FiAward;
                                            return (
                                                <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-100 dark:border-gray-700 w-[85px] bg-gray-50 dark:bg-gray-800">
                                                    {badge.icon ? (
                                                        <img src={badge.icon} alt={badge.name} className="w-8 h-8 object-contain mb-1.5 hover:scale-110 transition-transform" />
                                                    ) : (
                                                        <div className="w-8 h-8 flex items-center justify-center mb-1.5 text-green-500 hover:scale-110 transition-transform">
                                                            <IconComponent size={24} />
                                                        </div>
                                                    )}
                                                    <span className="text-[10px] text-center text-gray-600 dark:text-gray-400 leading-tight w-full font-semibold truncate">{badge.name}</span>
                                                    <div className="flex gap-0.5 mt-1 text-green-500 text-[8px]">
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
                        <div className="hidden md:block" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CodingStats;
