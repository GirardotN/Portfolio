import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../../content.json';

const Hero = () => {
    const { profile } = content;

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        {profile.availability.status} ({profile.availability.start_date})
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-tight"
                    >
                        {profile.name}
                        <span className="block text-2xl md:text-4xl text-gray-400 font-normal mt-4 font-mono">
                            {profile.role}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed"
                    >
                        {profile.sub_tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-6"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-white text-black font-bold text-lg rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2"
                        >
                            Voir mes projets
                            <ArrowRight size={20} />
                        </a>

                        <Link
                            to="/about"
                            className="flex items-center gap-4 px-8 py-4 border border-white/10 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <Globe size={20} className="text-gray-400" />
                            <span className="text-base text-gray-300">À propos de moi</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
