import React from 'react';
import { motion } from 'framer-motion';
import { Server, Terminal, Layout, Users, Cpu, Wrench, Globe, Brain } from 'lucide-react';
import content from '../../content.json';

const iconMap = {
    Server: <Server className="text-primary" size={24} />,
    Wrench: <Wrench className="text-primary" size={24} />,
    Globe: <Globe className="text-primary" size={24} />,
    Users: <Users className="text-primary" size={24} />,
    Terminal: <Terminal className="text-primary" size={24} />,
    Layout: <Layout className="text-primary" size={24} />,
    Cpu: <Cpu className="text-primary" size={24} />,
    Brain: <Brain className="text-primary" size={24} />
};

const SkillCard = ({ category, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-surface/50 rounded-xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:bg-surface/80"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                    {iconMap[category.icon] || <Cpu className="text-primary" size={24} />}
                </div>
                <h3 className="text-xl font-bold font-mono">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                    <span
                        key={i}
                        className="px-3 py-1.5 text-sm bg-white/5 text-gray-300 rounded-md border border-white/5 hover:border-primary/50 hover:text-white hover:bg-primary/10 transition-all duration-200 cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const { skills } = content;

    return (
        <section id="skills" className="py-20 bg-background relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 text-primary font-mono mb-4">
                        <Cpu size={20} />
                        <span>Compétences</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold">Arsenal Technique</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((category, index) => (
                        <SkillCard key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
