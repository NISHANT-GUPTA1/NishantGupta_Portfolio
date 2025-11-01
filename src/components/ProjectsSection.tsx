import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Personalized AI Interview Coach',
      description:
        'Enterprise-grade AI interview platform with real-time speech recognition, ML-powered question generation, and comprehensive analytics. Supports 10K+ concurrent users with 99.9% translation accuracy across 70+ languages.',
      tech: ['TypeScript', 'Next.js', 'React', 'WebRTC', 'TensorFlow.js', 'Node.js'],
      highlights: ['10K+ users', '99.9% accuracy', '70+ languages', 'Sub-200ms latency'],
      github: 'https://github.com/NISHANT-GUPTA1/Interview_Coach.git',
      demo: 'https://crackinterview.netlify.app/',
      hasDemo: true,
    },
    {
      title: 'AI Fitness Platform',
      description:
        'Computer vision ML system with 96.8% pose detection accuracy using TensorFlow.js, MediaPipe optimization, and GPU-accelerated inference pipeline for high-performance video processing.',
      tech: ['TensorFlow.js', 'Next.js', 'React', 'TypeScript', 'MediaPipe', 'Flask', 'SQLite'],
      highlights: ['96.8% accuracy', '75% faster processing', 'Real-time pose detection'],
      github: 'https://github.com/NISHANT-GUPTA1/Fitness_Health_Monitoring_AI.git',
      demo: 'https://fitnesshealthmonitoringai.netlify.app/',
      hasDemo: true,
    },
    {
      title: 'Multifaceted Disease Detection',
      description:
        'Production-ready ML pipeline for automated chest X-ray classification across 14+ pathological conditions using DenseNet121 with transfer learning. Achieved 89% validation accuracy with Grad-CAM explainability.',
      tech: ['PyTorch', 'Deep Learning', 'DenseNet121', 'Python', 'Grad-CAM'],
      highlights: ['89% accuracy', '14+ conditions', 'Real-time inference', 'MLOps pipeline'],
      github: null,
      isDocument: true,
      paperLink: 'https://www.overleaf.com/read/bydbhtspcnnj#a7d1a2',
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-center">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Building scalable, production-ready applications that solve real-world problems
          </p>

          <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass-card p-6 sm:p-8 hover:glow transition-all group">
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs font-mono">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 mb-4">
                        {project.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="text-xs sm:text-sm font-mono text-accent bg-accent/10 px-3 py-1 rounded-full"
                          >
                            ✓ {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 w-full lg:w-auto">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 lg:flex-none hover:bg-primary/10 hover:border-primary group/btn"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2 group-hover/btn:text-primary" />
                          <span className="group-hover/btn:text-primary">Code</span>
                        </Button>
                      )}
                      {project.isDocument && project.paperLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 lg:flex-none hover:bg-primary/10 hover:border-primary group/btn"
                          onClick={() => window.open(project.paperLink, '_blank')}
                        >
                          <FileText className="w-4 h-4 mr-2 group-hover/btn:text-primary" />
                          <span className="group-hover/btn:text-primary">Paper</span>
                        </Button>
                      )}
                      {project.hasDemo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 lg:flex-none hover:bg-accent/10 hover:border-accent group/btn"
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:text-accent" />
                          <span className="group-hover/btn:text-accent">Demo</span>
                        </Button>
                      )}
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
