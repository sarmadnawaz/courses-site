import { Input } from "./Input";

function SignInForm() {
  return (
    <div className="sign-in-form-container">
      <div className="sign-in-form-header">
        <h2 className="heading-secondary">Sign In</h2>
        <h3 className="sub-heading">with email and password</h3>
      </div>
      <form className="sign-in-form">
        <Input label="Email" type="email" required />
        <Input label="Password" type="password" required />
        <button type="submit" className="btn">
          Sign Up Now
        </button>
      </form>
    </div>
  );
}

export { SignInForm };
