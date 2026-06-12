import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { PricingSection } from "@/components/landing/pricing-section";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-slate-950">
      <Hero />
      <Features />
      <PricingSection />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
