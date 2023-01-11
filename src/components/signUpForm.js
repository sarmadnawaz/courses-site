import { Input } from "./Input";
import { Loader } from "../assests/Loader";
import { Select } from "./Select";
import { plans } from "../assests/dev-data/pricing-plans";
import auth from "../services/auth";
import { useValidation } from "../utilz/hooks/useValidation";
import { Message } from "./Message";
import { useState } from "react";
const initialValues = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

export function SignUpForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const [form, handleChange, errors, isFormValid, resetForm] =
    useValidation(initialValues);
  const { email, username, password, confirmPassword } = form;

  async function handleFormSubmit(e) {
    e.preventDefault();
    setStatus("running");
    try {
      if (isFormValid()) {
        const res = await auth.registerUser(form);
        setStatus("success");
        setMessage(res.message);
        resetForm();
      } else {
        setStatus("error");
        setMessage(errors[Object.keys(errors)[0]]);
      }
    } catch (err) {
        setStatus("error");
        setMessage(err.message)
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className="signup-form">
        <Input
          value={username}
          name="username"
          onChange={handleChange}
          type="text"
          label="Full Name"
        />
        <Input
          value={email}
          name="email"
          onChange={handleChange}
          type="text"
          label="Email"
        />
        <Input
          value={password}
          name="password"
          onChange={handleChange}
          type="text"
          label="Password"
        />
        <Input
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          type="text"
          label="Confirm Password"
        />
        <Select label="Plans" options={plans} />
        {status === "running" ? (
          <Loader className="end-center" />
        ) : (
          <button className="btn btn--outline">Sign Up Now</button>
        )}
      </form>
          {status === "success" && <Message type="success" message={message} />}
        {status === "error" && <Message type="error" message={message} />}
          
    </>
  );
}
