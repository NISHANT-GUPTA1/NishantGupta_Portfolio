import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin, GraduationCap } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nishantgupta3009@gmail.com',
      href: 'mailto:nishantgupta3009@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8273363640',
      href: 'tel:+918273363640',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/nishant-gupta-b34858297',
      href: 'https://www.linkedin.com/in/nishant-gupta-b34858297/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/NISHANT-GUPTA1',
      href: 'https://github.com/NISHANT-GUPTA1',
    },
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'University of Delhi',
      href: '#',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-center">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg max-w-2xl mx-auto px-4">
            I'm always open to discussing new opportunities, collaborations, or just chatting about technology and AI
          </p>

          <Card className="glass-card p-8 sm:p-12 hover:glow transition-all">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-all group ${
                    contact.href === '#' ? 'pointer-events-none' : 'cursor-pointer'
                  }`}
                >
                  <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground font-mono">{contact.label}</p>
                    <p className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Looking for a dedicated ML Engineer or Full-Stack Developer?
              </p>
              <Button
                size="lg"
                className="gradient-primary hover:opacity-90 transition-opacity text-base sm:text-lg px-8 py-6 glow group"
                onClick={() => window.open('mailto:nishantgupta3009@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <span className="group-hover:scale-105 transition-transform inline-block">Send Me an Email</span>
              </Button>
            </motion.div>
          </Card>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-sm text-muted-foreground font-mono">
              Designed & Built by Nishant Gupta
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2 font-mono">
              © 2025 All Rights Reserved
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
