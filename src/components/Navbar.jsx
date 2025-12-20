import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import content from '../../content.json';

const Navbar = () => {
    const { socials } = content;
    const location = useLocation();
    const isHome = location.pathname === '/';

    const scrollToSection = (id) => {
        if (!isHome) return; // Only scroll if on home page
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold font-mono text-primary">
                    Nicolas.dev
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">À Propos</Link>

                    {isHome ? (
                        <>
                            <button onClick={() => scrollToSection('skills')} className="text-sm text-gray-300 hover:text-white transition-colors">Compétences</button>
                            <button onClick={() => scrollToSection('projects')} className="text-sm text-gray-300 hover:text-white transition-colors">Projets</button>
                            <button onClick={() => scrollToSection('contact')} className="text-sm text-gray-300 hover:text-white transition-colors">Contact</button>
                        </>
                    ) : (
                        <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">Accueil</Link>
                    )}

                    <div className="h-4 w-px bg-white/10" />

                    <div className="flex items-center gap-4">
                        <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>

                    <a
                        href={socials.cv}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-sm font-medium transition-all group"
                    >
                        <FileText size={16} className="text-primary group-hover:text-white transition-colors" />
                        <span>CV</span>
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
