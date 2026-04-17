import type { Metadata } from "next";
import { 
    AboutHeroSection, 
    AboutSummarySection,  
    AboutSkillsSection,
    AboutExperienceSection,
    AboutProjectsSection,
    AboutEducationSection,
    AboutCtaSection
} from "../components/about";
import { NavBar } from "../components/landing";

export const metadata: Metadata = {
  title: "JL Solmeron | About",
  description:
    "About John Lorenz Solmeron, a web developer team lead focused on enterprise systems, e-commerce, and automation workflows.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background transition-colors">
      <NavBar />
      <AboutHeroSection />
      <AboutSummarySection />
      <AboutSkillsSection />
      <AboutExperienceSection />
      <AboutProjectsSection />
      <AboutEducationSection />
      <AboutCtaSection />
    </main>
  );
}
