//CSS
import "./SignupContainer.css";

import SignupForm from "./SignupForm";

/**
 * Displays the sign up page of application
 * after redirected from Login Page
 * 
 * @author Marcus Yeo
 * @returns SignupForm component
 */

const SignupContainer = () => {
  return (
    <div className="signup-container">
      <SignupForm/>
    </div>
  );
};

export default SignupContainer;