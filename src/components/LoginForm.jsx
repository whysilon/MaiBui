import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="loginForm">
      <div className="loginForm_container">
        <h1>Mai Bui</h1>
        <p>Your all in one eating aid</p>
        <form className="form">
          <p>Username:</p>
          <input></input>
          <p>Password:</p>
          <input ></input>
        </form>
        <a className="smallText">Forgot your password?</a>
        <button>Login</button>
        <p className="smallText">
          Don't have an account?<a> Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
