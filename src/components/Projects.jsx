import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Server, Database, Box, Code } from 'lucide-react';
import content from '../../content.json';

const iconMap = {
    Server: <Server size={32} />,
    Database: <Database size={32} />,
    Box: <Box size={32} />,
    Code: <Code size={32} />
};

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-surface rounded-xl p-8 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col h-full"
        >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={24} className="text-primary" />
            </div>

            <div className="mb-6 text-primary/80 group-hover:text-primary transition-colors">
                {iconMap[project.icon] || <Code size={32} />}
            </div>

            <h3 className="text-2xl font-bold mb-4 font-mono group-hover:text-primary transition-colors">
                {project.title}
            </h3>

            <p className="text-gray-400 text-base mb-8 leading-relaxed flex-grow">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
                {project.tech_stack.map((tech, i) => (
                    <span
                        key={i}
                        className="text-sm font-mono px-3 py-1.5 rounded bg-white/5 text-gray-300 border border-white/5 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-medium text-gray-400 hover:text-white transition-colors mt-auto"
            >
                <Github size={20} />
                Voir le Code
            </a>
        </motion.div>
    );
};

const Projects = () => {
    const { projects } = content;

    return (
        <section id="projects" className="py-32 bg-background relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-3 text-primary font-mono mb-6">
                        <Code size={24} />
                        <span className="text-lg">Portfolio</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold">Projets Techniques</h2>
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
