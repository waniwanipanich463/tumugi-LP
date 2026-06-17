import { Hero } from '@/components/layout/Hero';
import { Pricing } from '@/components/layout/Pricing';
import { Partner } from '@/components/layout/Partner';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Partner />
      <Pricing />
      <Footer />
    </main>
  );
}
