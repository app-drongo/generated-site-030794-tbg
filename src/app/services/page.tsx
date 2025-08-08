import SplitHero from '../../components/SplitHero';
import CenteredCta from '../../components/CenteredCta';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <SplitHero />
      </section>
      <section id="cta" className="scroll-mt-16">
        <CenteredCta />
      </section>
    </main>
  );
}