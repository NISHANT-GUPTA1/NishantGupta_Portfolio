import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';
import geeksforgeeksIcon from '@/assets/geeksforgeeks.png';

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/NISHANT-GUPTA1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nishant-gupta-b34858297/', label: 'LinkedIn' },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
        </svg>
      ), 
      href: 'https://leetcode.com/u/itsNishant_Gupta/', 
      label: 'LeetCode' 
    },
    { 
      icon: () => (
        <img src={geeksforgeeksIcon} alt="GeeksforGeeks" className="w-5 h-5 sm:w-6 sm:h-6 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all" />
      ), 
      href: 'https://www.geeksforgeeks.org/user/nishu30xkho/', 
      label: 'GeeksforGeeks' 
    },
    { icon: Mail, href: 'mailto:nishantgupta3009@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+918273363640', label: 'Phone' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-mono text-sm sm:text-base mb-4"
            >
              Welcome
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6"
            >
              <span className="text-gradient">Nishant Gupta</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl sm:text-3xl lg:text-5xl font-bold text-muted-foreground mb-6 sm:mb-8"
            >
              Machine Learning Innovator & Full-Stack Craftsman
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
            >
              Transforming complex challenges into elegant AI-powered solutions. Specializing in{' '}
              <span className="text-primary font-semibold">Neural Networks</span>,{' '}
              <span className="text-accent font-semibold">Computer Vision</span>, and{' '}
              <span className="text-primary font-semibold">Scalable ML Systems</span> that drive real-world impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="gradient-primary hover:opacity-90 transition-opacity text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 glow group"
              >
                <span className="group-hover:scale-110 transition-transform inline-block">
                  Get In Touch
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('https://drive.google.com/file/d/1-RGWj6RGOVMF7DY77cLR1wJEa0E6qKD7/view?usp=drive_link', '_blank')}
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-accent/50 hover:border-accent hover:bg-accent/10 gap-2"
              >
                <FileText className="w-5 h-5" />
                View Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('https://github.com/NISHANT-GUPTA1', '_blank')}
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                View My Work
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-4 justify-center"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className="p-3 glass-card rounded-full hover:bg-primary/20 transition-all hover:glow group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};
