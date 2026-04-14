import {
  Background,
  Booking,
  BuildList,
  CtaFooter,
  Hero,
  Highlights,
  NavBar,
  Process,
  Projects,
  Services,
} from "./components/landing";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <Highlights />
      <Services />
      <Projects />
      <Process />
      <Background />
      <BuildList />
      <Booking />
      <CtaFooter />
    </main>
  );
}
