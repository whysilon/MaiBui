import React from "react";

//import pages
import AccountCenter from "./pages/AccountCenter/AccountCenter";
import ChangeUsername from "./pages/AccountCenter/ChangeUsername/ChangeUsername";
import ChangePassword from "./pages/AccountCenter/ChangePassword/ChangePassword";
import LoginContainer from "./pages/LoginPage/LoginContainer"
import FeedbackContainer from "./pages/FeedbackPage/FeedbackContainer";

const App = () => {
  return <div>
    {/* <LoginContainer/> */}
    <FeedbackContainer/>
  </div>;
};

export default App;
