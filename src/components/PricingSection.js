import { PricingPlane } from "./PricingPlan";
import {
  freePlanFeatures,
  premiumPlanFeatures,
  standardPlanFeatures,
} from "../assests/dev-data/pricing-plans";

function PricingSection() {
  return (
    <section className="pricing-section" id="pricing-section">
      <div className="container pricing-section-container">
        <div className="pricing-section-header">
          <h2 className="sub-heading">Pricing</h2>
          <h2 className="heading-secondary">
            Enjoy awesome learning experience
          </h2>
        </div>
        <div className="pricing-section-main">
          <PricingPlane features={freePlanFeatures} />
          <PricingPlane
            planType="standard"
            features={standardPlanFeatures}
            price="10"
          />
          <PricingPlane
            planType="premium"
            features={premiumPlanFeatures}
            price="15"
          />
        </div>
      </div>
    </section>
  );
}

export { PricingSection };
