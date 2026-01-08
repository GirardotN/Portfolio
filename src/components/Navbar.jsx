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

    const handleNavClick = (e, id) => {
        e.preventDefault();
        if (isHome) {
            scrollToSection(id);
        } else {
            // Navigate to home with hash
            window.location.href = `/#${id}`;
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold font-sans tracking-tighter text-white">
                    NICOLAS<span className="text-primary">.DEV</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link to="/about" className="text-sm font-mono text-gray-400 hover:text-primary transition-colors uppercase tracking-wider">À Propos</Link>

                    <a href="/#skills" onClick={(e) => handleNavClick(e, 'skills')} className="text-sm font-mono text-gray-400 hover:text-primary transition-colors uppercase tracking-wider">Compétences</a>
                    <a href="/#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-sm font-mono text-gray-400 hover:text-primary transition-colors uppercase tracking-wider">Projets</a>
                    <a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-sm font-mono text-gray-400 hover:text-primary transition-colors uppercase tracking-wider">Contact</a>

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
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-primary hover:text-white text-sm font-bold transition-all duration-300"
                    >
                        <FileText size={16} />
                        <span>CV</span>
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
