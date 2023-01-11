import { subscriptionSectionImages } from "../assests/dev-data/images";
import { SignUpForm } from "./signUpForm";
function SubscriptionSection() {
  return (
    <div className="subscription-section" id="subscription-section">
      <div className="container">
        <div className="subscription-container">
          <div className="subscription-container-content">
            <div className="subscription-form-container-header heading-secondary">
              Get Trial peroid of 15 days for free
            </div>
            <p className="para-primary">
              Sign up now to get free access to 100 courses and 75 books for
              free. You can also subscribe paid plans by now
            </p>
          <SignUpForm />
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
