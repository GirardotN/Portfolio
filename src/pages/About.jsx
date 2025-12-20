import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Target, Heart } from 'lucide-react';
import content from '../../content.json';

const About = () => {
    const { about } = content;

    return (
        <div className="pt-24 min-h-screen bg-background text-white px-6 pb-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">À Propos de Moi</h1>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                {/* Biography */}
                <motion.section
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16 bg-surface/30 p-8 rounded-2xl border border-white/5"
                >
                    <div className="flex items-center gap-3 mb-6 text-primary">
                        <User size={28} />
                        <h2 className="text-2xl font-bold font-mono">Biographie</h2>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        {about.biography}
                    </p>
                </motion.section>

                {/* Education */}
                <motion.section
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8 text-primary">
                        <BookOpen size={28} />
                        <h2 className="text-2xl font-bold font-mono">Parcours de Formation</h2>
                    </div>
                    <div className="space-y-6">
                        {about.education.map((edu, index) => (
                            <div key={index} className="bg-surface/30 p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                    <span className="text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">{edu.year}</span>
                                </div>
                                <p className="text-gray-400 font-medium mb-2">{edu.school}</p>
                                <p className="text-gray-500 text-sm">{edu.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Vision */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-surface/30 p-8 rounded-2xl border border-white/5"
                    >
                        <div className="flex items-center gap-3 mb-6 text-primary">
                            <Target size={28} />
                            <h2 className="text-2xl font-bold font-mono">Vision & Avenir</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            {about.vision}
                        </p>
                    </motion.section>

                    {/* Interests */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-surface/30 p-8 rounded-2xl border border-white/5"
                    >
                        <div className="flex items-center gap-3 mb-6 text-primary">
                            <Heart size={28} />
                            <h2 className="text-2xl font-bold font-mono">Centres d'Intérêt</h2>
                        </div>
                        <ul className="space-y-3">
                            {about.interests.map((interest, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-300">
                                    <span className="h-1.5 w-1.5 bg-primary rounded-full" />
                                    {interest}
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
