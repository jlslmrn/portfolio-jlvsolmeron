import {
  Achievements,
  Education,
  Footer,
  PersonalInfo,
  Projects,
  Skills,
  WorkExperience,
} from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <PersonalInfo />
      <Skills />
      <WorkExperience />
      <Projects />
      <Education />
      <Achievements />
      <Footer />
    </div>
  );
}
