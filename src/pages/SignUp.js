import { subscriptionSectionImages } from "../assests/dev-data/images";
import { SignUpForm } from "../components/signUpForm";
function SignUp() {
  return (
    <div className="signup-page">
      <div className="signup-page-container">
        <div className="signup-page-container-header">
          <div className="signup-page-header heading-secondary">
            Get Trial peroid of 15 days for free
          </div>
          <p className="para-primary">
            Sign up now to get free access to 100 courses and 75 books for free.
            You can also subscribe paid plans by now
          </p>
        </div>
        {/* <div className="signup-page-imgs">
          {subscriptionSectionImages.map((img) => (
            <img src={img} />
          ))}
        </div> */}
        <div className="signup-page-content">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export { SignUp };
