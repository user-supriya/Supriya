    import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export const SkillCard = ({ icon, title, description, technologies }: { 
  icon: ReactNode; 
  title: string; 
  description: string; 
  technologies: string[] 
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-pink-300/30 transition-all duration-300 h-full"
    >
      <div className="text-pink-400 mb-4">{icon}</div>
      <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 text-xs rounded-full border border-pink-400/30 hover:border-pink-300/50 hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-purple-500/30 transition-all cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};