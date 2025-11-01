import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      role: 'ML Intern (Full-time)',
      company: 'KratiTech',
      location: 'Kanpur, Uttar Pradesh',
      period: 'June 2025 – August 2025',
      achievements: [
        'Deployed ML models in production serving 10K+ daily requests with 99.5% uptime',
        'Reduced manual workflow intervention by 40% through autonomous AI agents',
        'Built real-time computer vision surveillance system processing 1000+ video hours',
        'Developed conversational AI chatbots achieving 85% query resolution rate',
        'Led cross-functional collaboration with 15+ engineers using Agile methodology',
      ],
      skills: ['ML Production', 'Computer Vision', 'OpenCV', 'Python', 'Transformer Models', 'Agile'],
    },
    {
      role: 'Academic Research Project',
      company: 'Faculty of Technology, University of Delhi',
      location: 'North Delhi, India',
      period: 'March 2025 – June 2025',
      achievements: [
        'Led team of 5 to develop ML pipeline for chest X-ray classification across 14+ conditions',
        'Achieved 89% validation accuracy using DenseNet121 with transfer learning',
        'Implemented end-to-end MLOps pipeline with Grad-CAM explainability',
        'Improved cross-domain performance by 15% with real-time clinical decision support',
        'Co-authored peer-reviewed research paper on deep learning in medical imaging',
      ],
      skills: ['Deep Learning', 'PyTorch', 'DenseNet121', 'MLOps', 'Medical AI', 'Research'],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-center">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Building production ML systems and conducting cutting-edge research
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass-card p-6 sm:p-8 hover:glow transition-all group relative overflow-hidden">
                  {/* Decorative gradient border on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-base sm:text-lg text-accent font-semibold">{exp.company}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground font-mono">{exp.location}</p>
                      </div>
                      <Badge variant="outline" className="font-mono text-xs sm:text-sm whitespace-nowrap self-start">
                        {exp.period}
                      </Badge>
                    </div>

                    <ul className="space-y-2 sm:space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 + i * 0.05 }}
                          className="flex items-start text-sm sm:text-base text-muted-foreground"
                        >
                          <span className="text-primary mr-2 mt-1.5 flex-shrink-0">▹</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs font-mono hover:scale-110 transition-transform cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
