import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Server, Database, Box, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../../content.json';

const iconMap = {
    Server: <Server className="text-primary" size={32} />,
    Database: <Database className="text-primary" size={32} />,
    Box: <Box className="text-primary" size={32} />
};

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative border border-white/10 bg-transparent hover:border-primary/50 transition-colors duration-300"
        >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="text-primary -rotate-45" size={24} />
            </div>

            <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                    <div className="text-primary font-mono text-xs tracking-widest uppercase mb-2">
                        {project.highlight}
                    </div>
                </div>

                <h3 className="text-3xl font-bold mb-4 font-sans text-white group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-gray-400 mb-8 line-clamp-3 flex-grow font-light leading-relaxed">
                    {project.description}
                </p>

                <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                        {project.tech_stack.map((tech, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider border border-white/10 text-gray-500"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                        <Link
                            to={`/project/${project.id}`}
                            className="text-sm font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2"
                        >
                            DÉTAILS DU PROJET
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const { projects } = content;

    return (
        <section id="projects" className="py-32 bg-background relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-end gap-6"
                >
                    <div>
                        <div className="flex items-center gap-2 text-primary font-mono mb-4 text-sm tracking-widest uppercase">
                            <span className="w-2 h-2 bg-primary"></span>
                            Portfolio 2024
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold font-sans text-white">PROJETS SÉLECTIONNÉS</h2>
                    </div>
                    <p className="text-gray-400 text-lg max-w-md text-right hidden md:block">
                        Une collection de travaux axés sur la performance et l'architecture.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
