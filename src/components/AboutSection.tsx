import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '99.5%', label: 'System Uptime' },
    { value: '10K+', label: 'Daily Requests' },
    { value: '40%', label: 'Efficiency Boost' },
    { value: '8.00', label: 'CGPA' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 text-center">
            <span className="text-gradient">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass-card p-6 sm:p-8">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a <span className="text-primary font-semibold">Computer Science Engineering</span> student at the{' '}
                  <span className="text-accent font-semibold">University of Delhi</span>, passionate about building
                  intelligent systems that solve real-world problems.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  Currently working as an <span className="text-primary font-semibold">ML Intern at KratiTech</span>,
                  where I've deployed production ML models serving 10K+ daily requests with 99.5% uptime and built
                  real-time computer vision systems processing 1000+ video hours.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  My expertise spans <span className="text-accent font-semibold">Deep Learning</span>,{' '}
                  <span className="text-primary font-semibold">Computer Vision</span>, and{' '}
                  <span className="text-accent font-semibold">Full-Stack Development</span>, with a focus on creating
                  scalable, production-ready applications.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="glass-card p-4 sm:p-6 text-center hover:glow transition-all group cursor-pointer">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-mono">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
