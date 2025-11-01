import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Medal, FileCheck } from 'lucide-react';

const competitions = [
  {
    title: 'The Open Group INITIATE Enterprise Architecture Competition',
    organization: 'Capgemini',
    achievement: '1st Place Winner',
    description: 'Healthcare IT Security Architecture Challenge',
    date: 'Jan 2025 – June 2025',
    icon: Trophy,
    color: 'text-yellow-400',
  },
  {
    title: 'SANKALP-101 Virtual Hackathon',
    organization: 'TrishulX Community',
    achievement: '3rd Place',
    description: 'Among 2200+ participants',
    date: 'July 2025',
    icon: Medal,
    color: 'text-amber-500',
  },
  {
    title: 'Hackground India 2K25',
    organization: 'TechVerse Nexus',
    achievement: 'Grand Finalist - Team CodeX',
    description: 'Among 2500+ registrations, reached final 50',
    date: 'Aug 2025',
    icon: Award,
    color: 'text-purple-400',
  },
  {
    title: 'Tech Crisis Event',
    organization: 'IIIT Delhi',
    achievement: '2nd Runner-Up',
    description: 'Among 350+ participants',
    date: 'March 2025',
    icon: Award,
    color: 'text-orange-400',
  },
  {
    title: 'Newtonian 2025 Hackathon',
    organization: 'Kirori Mal College, Delhi University',
    achievement: '1st Place Winner & Team Lead',
    description: 'Leading innovative solutions',
    date: 'Feb 2025',
    icon: Trophy,
    color: 'text-yellow-400',
  },
];

const certificates = [
  {
    title: 'Goldman Sachs Software Engineering Job Simulation',
    issuer: 'Goldman Sachs',
    description: 'Cybersecurity Analysis & Vulnerability Assessment',
    date: '2024',
    icon: FileCheck,
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">Achievements & Recognition</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Awards, competitions, and certifications that showcase my journey
          </p>
        </motion.div>

        {/* Competitions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            🏆 Competition Wins
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitions.map((competition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card h-full hover:glow transition-all hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <competition.icon className={`w-8 h-8 ${competition.color}`} />
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        {competition.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{competition.title}</CardTitle>
                    <CardDescription className="text-accent font-semibold">
                      {competition.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Badge className="gradient-primary text-base px-4 py-1">
                        {competition.achievement}
                      </Badge>
                      <p className="text-muted-foreground">{competition.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            📜 Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card h-full hover:border-accent/50 transition-all hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <cert.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{cert.title}</CardTitle>
                        <CardDescription>{cert.issuer}</CardDescription>
                        {cert.description && (
                          <p className="text-sm text-muted-foreground mt-1">{cert.description}</p>
                        )}
                        <Badge variant="outline" className="mt-2 border-primary/50">
                          {cert.date}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
