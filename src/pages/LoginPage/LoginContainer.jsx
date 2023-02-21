import "./LoginContainer.css";
import LoginPicture from "./LoginPicture";
import LoginForm from "./LoginForm";

const LoginContainer = () => {
  return (
    <div className="container">
      <LoginPicture/>
      <LoginForm/>
    </div>
  );
};

export default LoginContainer;