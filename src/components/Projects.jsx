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
            className="group relative bg-surface/50 rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300"
        >
            <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-center mb-6 gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300 shrink-0">
                        {iconMap[project.icon] || <Code size={32} />}
                    </div>
                    <div className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-400 border border-white/5 text-center">
                        {project.highlight}
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-gray-400 mb-6 line-clamp-3 flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech_stack.map((tech, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 text-xs bg-background rounded border border-white/10 text-gray-500"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <Link
                    to={`/project/${project.id}`}
                    className="flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                >
                    Voir le Projet <ArrowRight size={16} />
                </Link>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const { projects } = content;

    return (
        <section id="projects" className="py-32 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 text-primary font-mono mb-4">
                        <Code size={20} />
                        <span>Portfolio</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Projets Récents</h2>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Une sélection de projets démontrant mes compétences en architecture logicielle et développement backend.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
