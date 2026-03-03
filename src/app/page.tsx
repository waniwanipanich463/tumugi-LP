import { Hero } from '@/components/layout/Hero';
import { Pricing } from '@/components/layout/Pricing';
import { Partner } from '@/components/layout/Partner';
import { Footer } from '@/components/layout/Footer';
import { ChatbotPopup } from '@/components/layout/ChatbotPopup';
import { Contact } from '@/components/layout/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Partner />
      <Pricing />
      <Contact />
      <Footer />
      <ChatbotPopup />
    </main>
  );
}
