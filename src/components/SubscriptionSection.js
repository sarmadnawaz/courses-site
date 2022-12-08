import { Input } from "./Input";
import { Select } from "./Select";
import { subscriptionSectionImages } from "../assests/dev-data/images";
import { plans } from "../assests/dev-data/pricing-plans";

function SubscriptionSection() {
  return (
    <div className="subscription-section">
      <div className="container">
        <div className="subscription-container">
          <div className="subscription-container-content">
            <div className="subscription-form-container-header heading-secondary">
              Get Trial peroid of 15 days for free
            </div>
            <p className="subscription-container-content-text">
              Sign up now to get free access to 100 courses and 75 books for
              free. You can also subscribe paid plans by now
            </p>
            <form className="subscription-form">
              <Input type="text" label="Full Name" />
              <Input type="text" label="Email" />
              <Input type="text" label="Password" />
              <Input type="text" label="Confirm Password" />
              <Select label="Plans" option={plans} />
              <button className="btn">Sign Up Now</button>
            </form>
          </div>
          <div className="subscription-container-imgs">
            {subscriptionSectionImages.map((img) => (
              <img src={img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { SubscriptionSection };
