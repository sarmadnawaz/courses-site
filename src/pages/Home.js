import { HeroSection } from "../components/HeroSection";
import { CategoriesSection } from "../components/CategoriesSection";
import { PricingSection } from "../components/PricingSection";
import { SubscriptionSection } from "../components/SubscriptionSection";
import { Footer } from "../components/Footer";
import { DashBoard } from "../components/Dashboard";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <main className="home-page-main">
      <div className="home-page-top-container">
        <Header />
        <HeroSection />
      </div>
      {/* <DashBoard /> */}
      <CategoriesSection />
      <PricingSection />
      <SubscriptionSection />
      {/* <Footer />  */}
    </main>
  );
};
