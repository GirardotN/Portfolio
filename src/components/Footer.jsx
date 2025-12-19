import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import content from '../../content.json';

const Footer = () => {
    const { socials } = content;

    return (
        <footer className="bg-surface border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold font-mono text-white mb-2">Nicolas.dev</h3>
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Nicolas Girardot. <br className="md:hidden" />
                        Built with React & Tailwind.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href={socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href={`mailto:${socials.email}`}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
