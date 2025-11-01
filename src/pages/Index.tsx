import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { ContactSection } from '@/components/ContactSection';
import { Hero3D } from '@/components/Hero3D';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Fixed 3D Background throughout entire page */}
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
        <Hero3D />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
