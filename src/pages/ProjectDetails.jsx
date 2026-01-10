import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Code, Lightbulb, FileText } from 'lucide-react';
import content from '../../content.json';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = content.projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
                <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
                <Link to="/" className="text-primary hover:underline">Retour à l'accueil</Link>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-background text-white px-6 pb-20">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Retour à l'accueil
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
                        <div className="flex gap-4">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors"
                                >
                                    <Github size={20} />
                                    <span className="hidden md:inline">Voir le code</span>
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-xl text-gray-300 mb-12 leading-relaxed border-l-4 border-primary pl-6">
                        {project.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-surface/30 p-6 rounded-xl border border-white/5">
                            <div className="flex items-center gap-2 text-primary mb-4 font-mono">
                                <Code size={20} />
                                <span className="font-bold">Stack Technique</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tech_stack.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 text-sm bg-background rounded-md border border-white/10 text-gray-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="md:col-span-2 bg-surface/30 p-6 rounded-xl border border-white/5">
                            <div className="flex items-center gap-2 text-primary mb-4 font-mono">
                                <FileText size={20} />
                                <span className="font-bold">Contexte du Projet</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                {project.context}
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-surface/50 to-surface/30 p-8 rounded-2xl border border-white/5 mb-12">
                        <div className="flex items-center gap-3 text-primary mb-6">
                            <Lightbulb size={28} />
                            <h2 className="text-2xl font-bold font-mono">Apprentissages & Compétences</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {project.learnings}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetails;
