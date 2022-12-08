import { MdCheckIcon } from "../assests/Icons";
function PricingPlane({ planType = "free", features = [], price=0 }) {
  return (
    <div className={`pricing-plan pricing-plan-${planType.toLowerCase()}`}>
      <header className="pricing-plan-header">
        <p className="pricing-plan-name">Free</p>
        <p className="pricing-plan-price">
          $<span>{price}</span>
        </p>
        <p className="pricing-plan-text">Premium</p>
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
      <div className="pricing-plan-signup">
        <a className="btn">Get Started</a>
      </div>
    </div>
  );
}

export { PricingPlane };
