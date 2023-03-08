import React from "react";

//Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountCenterContainer from "./pages/AccountCenterPage/AccountCenterContainer";
import ChangeUsernameContainer from "./pages/AccountCenterPage/ChangeUsernamePage/ChangeUsernameContainer";
import ChangePasswordContainer from "./pages/AccountCenterPage/ChangePasswordPage/ChangePasswordContainer";
import LoginContainer from "./pages/LoginPage/LoginContainer";
import FeedbackContainer from "./pages/FeedbackPage/FeedbackContainer";
import SelectRestaurantContainer from "./pages/SelectRestaurant/SelecRestaurantContainer";
import HomePageNavBar from "./components/HomePageNavBar";
import CalorieContainer from "./pages/CalorieCalculator/CalorieContainer";
import SignupContainer from "./pages/SignupPage/SignupContainer"
import HomeContainer from "./pages/HomePage/HomeContainer";
import ForgotPasswordContainer from "./pages/ForgotPasswordPage/ForgotPasswordContainer";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/home" element={<HomeContainer/>} />
          <Route path="/account-center" element={<AccountCenterContainer />} />
          <Route
            path="/account-center/change-username"
            element={<ChangeUsernameContainer />}
          />
          <Route
            path="/account-center/change-password"
            element={<ChangePasswordContainer />}
          />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/feedback" element={<FeedbackContainer />} />
          <Route path="/restaurant" element={<SelectRestaurantContainer />} />
          <Route path="/calorie-calculator" element={<CalorieContainer />} />
          <Route path="/signup" element={<SignupContainer />} />
          <Route path="/forgot-password" element={<ForgotPasswordContainer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
