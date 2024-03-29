// CSS
import "./LoginContainer.css";

import LoginForm from "./LoginForm";

//To do: Sync Login Details with backend

/**
 * Displays the Login Page of the application.
 * Also the starting page of the application
 * 
 * @author Marcus Yeo
 * @returns LoginPicture and LoginForm components
 */

const LoginContainer = () => {
  return (
    <div className="login-container">
      <LoginForm/>
    </div>
  );
};

export default LoginContainer;