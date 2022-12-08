import { HeroSection } from "../components/HeroSection";
import { CategoriesSection } from "../components/CategoriesSection";
import { PricingSection } from "../components/PricingSection";
import { SubscriptionSection } from "../components/SubscriptionSection";
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <PricingSection />
      <SubscriptionSection />
      <Footer />
    </main>
  );
};
