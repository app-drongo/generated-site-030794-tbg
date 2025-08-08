import CenteredHero from '../components/CenteredHero';
import MissionAbout from '../components/MissionAbout';
import FormContact from '../components/FormContact';
import LinksFooter from '../components/LinksFooter';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <CenteredHero />
      </section>
      <section id="about" className="scroll-mt-16">
        <MissionAbout />
      </section>
      <section id="contact" className="scroll-mt-16">
        <FormContact />
      </section>
      <section id="footer" className="scroll-mt-16">
        <LinksFooter />
      </section>
    </main>
  );
}