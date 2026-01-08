import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../../content.json';

const Hero = () => {
    const { profile } = content;

    return (
        <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-3 mb-8"
                        >
                            <div className="h-px w-8 bg-primary"></div>
                            <span className="text-primary font-mono text-sm tracking-widest uppercase">
                                {profile.availability.status}
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter leading-[0.9] font-sans text-white"
                        >
                            {profile.name.split(' ')[0]}
                            <span className="text-gray-600">.</span>
                            <br />
                            <span className="text-gray-500">{profile.name.split(' ')[1]}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl md:text-2xl text-textMuted mb-12 max-w-2xl leading-relaxed font-light"
                        >
                            {profile.role} <span className="text-primary">/</span> {profile.sub_tagline}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap items-center gap-6"
                        >
                            <a
                                href="#projects"
                                className="group px-8 py-4 bg-white text-black font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2"
                            >
                                PROJETS
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <Link
                                to="/about"
                                className="px-8 py-4 border border-white/20 text-white hover:border-primary hover:text-primary transition-colors duration-300 font-mono text-sm"
                            >
                                À PROPOS
                            </Link>

                            <a
                                href={content.socials.cv}
                                className="px-8 py-4 border border-primary/20 text-primary hover:bg-primary/10 transition-colors duration-300 font-mono text-sm flex items-center gap-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                TÉLÉCHARGER CV
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-primary/50 to-transparent"></div>
            <div className="absolute top-0 left-0 w-px h-1/3 bg-gradient-to-b from-primary/50 to-transparent"></div>
        </section>
    );
};

export default Hero;
