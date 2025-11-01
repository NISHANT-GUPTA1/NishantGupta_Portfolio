import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code2, Globe, Database, Smartphone, Cpu, Flame } from 'lucide-react';

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'AI/ML & Deep Learning',
      color: 'primary',
      icon: Brain,
      skills: [
        { name: 'PyTorch', icon: '🔥' },
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'Scikit-learn', icon: '📊' },
        { name: 'Deep Learning', icon: '🤖' },
        { name: 'Computer Vision', icon: '👁️' },
        { name: 'OpenCV', icon: '📸' }
      ],
    },
    {
      title: 'Programming Languages',
      color: 'accent',
      icon: Code2,
      skills: [
        { name: 'Python', icon: '🐍' },
        { name: 'Java (DSA)', icon: '☕' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'C', icon: '⚙️' },
        { name: 'MySQL', icon: '🗄️' },
        { name: 'Bash', icon: '💻' }
      ],
    },
    {
      title: 'Web Development',
      color: 'primary',
      icon: Globe,
      skills: [
        { name: 'React.js', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Flask', icon: '🌶️' },
        { name: 'HTML/CSS', icon: '🎨' },
        { name: 'REST API', icon: '🔌' }
      ],
    },
    {
      title: 'Databases & Cloud',
      color: 'accent',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'MySQL', icon: '🗄️' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Git', icon: '📦' },
        { name: 'Linux', icon: '🐧' }
      ],
    },
    {
      title: 'Mobile & Tools',
      color: 'primary',
      icon: Smartphone,
      skills: [
        { name: 'Flutter', icon: '📱' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'Verilog', icon: '🔧' },
        { name: 'WebRTC', icon: '📹' },
        { name: 'MLOps', icon: '🚀' }
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-center">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg max-w-2xl mx-auto px-4">
            A comprehensive toolkit for building intelligent, scalable, and production-ready applications
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card p-6 hover:glow transition-all h-full group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${category.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'}`}>
                      <category.icon className={`w-6 h-6 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gradient group-hover:scale-105 transition-transform">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const skillName = typeof skill === 'string' ? skill : skill.name;
                      const skillIcon = typeof skill === 'object' ? skill.icon : null;
                      return (
                        <Badge
                          key={skillName}
                          variant={category.color === 'primary' ? 'default' : 'secondary'}
                          className="text-xs sm:text-sm font-mono hover:scale-110 transition-transform cursor-pointer"
                        >
                          {skillIcon && <span className="mr-1">{skillIcon}</span>}
                          {skillName}
                        </Badge>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
