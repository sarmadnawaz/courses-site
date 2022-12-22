import { MdCheckIcon } from "../assests/Icons";
function PricingPlane({
  planType = "Free Trial",
  features = [],
  price = 0,
  duration,
}) {
  return (
    <div className={`pricing-plan pricing-plan-${planType.toLowerCase()}`}>
      <header className="pricing-plan-header">
        <p className="pricing-plan-name">{planType}</p>
        <p className="pricing-plan-price">
          $<span>{price}</span>
        </p>
        <p className="pricing-plan-duration">{duration}</p>
      </header>
      <ul className="pricing-plan-features-list">
        {features.map((feature) => {
          return (
            <li className="pricing-plan-feature">
              <div>
                <MdCheckIcon />
              </div>
              <p>{feature}</p>
            </li>
          );
        })}
      </ul>
      <div className="link-signup">
        <a href="#subscription-section" className="btn btn--outline">
          Get Started
        </a>
      </div>
    </div>
  );
}

export { PricingPlane };
