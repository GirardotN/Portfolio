import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Target, Heart } from 'lucide-react';
import content from '../../content.json';

const About = () => {
    const { about } = content;

    return (
        <div className="pt-32 min-h-screen bg-background text-white px-6 pb-20 relative">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 border-b border-white/10 pb-8"
                >
                    <div className="flex items-center gap-2 text-primary font-mono mb-4 text-sm tracking-widest uppercase">
                        <span className="w-2 h-2 bg-primary"></span>
                        Profil
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-sans">À PROPOS</h1>
                </motion.div>

                {/* Biography */}
                <motion.section
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-20 grid grid-cols-1 md:grid-cols-12 gap-8"
                >
                    <div className="md:col-span-4">
                        <h2 className="text-xl font-bold font-mono text-gray-400 uppercase tracking-wider">Biographie</h2>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-xl text-gray-300 leading-relaxed font-light">
                            {about.biography}
                        </p>
                    </div>
                </motion.section>

                {/* Education */}
                <motion.section
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-grow bg-white/10"></div>
                        <h2 className="text-xl font-bold font-mono text-gray-400 uppercase tracking-wider">Formation</h2>
                    </div>

                    <div className="space-y-0">
                        {about.education.map((edu, index) => (
                            <div key={index} className="group border-b border-white/10 py-8 hover:bg-white/5 transition-colors px-4 -mx-4">
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-white font-sans">{edu.degree}</h3>
                                    <span className="text-primary font-mono text-sm mt-2 md:mt-0">{edu.year}</span>
                                </div>
                                <p className="text-gray-400 font-medium mb-2 uppercase tracking-wide text-sm">{edu.school}</p>
                                <p className="text-gray-500 font-light max-w-2xl">{edu.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Vision */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="border border-white/10 p-8 hover:border-primary/50 transition-colors duration-300"
                    >
                        <h2 className="text-xl font-bold font-mono text-gray-400 uppercase tracking-wider mb-6">Vision</h2>
                        <p className="text-gray-300 leading-relaxed font-light">
                            {about.vision}
                        </p>
                    </motion.section>

                    {/* Interests */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="border border-white/10 p-8 hover:border-primary/50 transition-colors duration-300"
                    >
                        <h2 className="text-xl font-bold font-mono text-gray-400 uppercase tracking-wider mb-6">Intérêts</h2>
                        <ul className="space-y-4">
                            {about.interests.map((interest, index) => (
                                <li key={index} className="flex items-center gap-4 text-gray-300 group">
                                    <span className="h-px w-4 bg-primary group-hover:w-8 transition-all duration-300" />
                                    <span className="font-light">{interest}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default About;
