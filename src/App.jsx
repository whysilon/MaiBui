import React from "react";

//Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountCenterPage from "./pages/AccountCenterPage/AccountCenterPage";
import ChangeUsername from "./pages/AccountCenterPage/ChangeUsername/ChangeUsername";
import ChangePassword from "./pages/AccountCenterPage/ChangePassword/ChangePassword";
import LoginContainer from "./pages/LoginPage/LoginContainer";
import FeedbackContainer from "./pages/FeedbackPage/FeedbackContainer";
import HomePageNavBar from "./Components/HomePageNavBar";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePageNavBar />} />
          <Route path="/home" element={<HomePageNavBar />} />
          <Route path="/account-center" element={<AccountCenterPage />} />
          <Route
            path="/account-center/change-username"
            element={<ChangeUsername />}
          />
          <Route
            path="/account-center/change-password"
            element={<ChangePassword />}
          />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/feedback" element={<FeedbackContainer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
