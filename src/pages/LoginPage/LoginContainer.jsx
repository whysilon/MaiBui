import "./LoginContainer.css";
import LoginPicture from "./LoginPicture";
import LoginForm from "./LoginForm";

//To do: Sync Login Details with backend

const LoginContainer = () => {
  return (
    <div className="login-container">
      <LoginPicture/>
      <LoginForm/>
    </div>
  );
};

export default LoginContainer;