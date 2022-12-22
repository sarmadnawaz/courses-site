import { PricingPlane } from "./PricingPlan";
import {
  freePlanFeatures,
  premiumPlanFeatures,
  standardPlanFeatures,
} from "../assests/dev-data/pricing-plans";

function PricingSection() {
  return (
    <section className="pricing-section" id="pricing-section">
      <div className="container">
        <h2 className="sub-heading">Pricing</h2>
        <h2 className="heading-secondary">Enjoy awesome learning experience</h2>
        <div className="pricing-section-main">
          <PricingPlane features={freePlanFeatures} duration="15 days" />
          <PricingPlane
            planType="standard"
            features={standardPlanFeatures}
            price="5.99"
            duration="monthly"
          />
          <PricingPlane
            planType="premium"
            features={premiumPlanFeatures}
            price="24.99"
            duration="monthly"
          />
        </div>
      </div>
    </section>
  );
}

export { PricingSection };
