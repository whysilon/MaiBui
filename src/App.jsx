import React from "react";

//Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountCenterContainer from "./pages/AccountCenterPage/AccountCenterContainer";
import ChangeUsernameContainer from "./pages/ChangeUsernamePage/ChangeUsernameContainer";
import ChangePasswordContainer from "./pages/ChangePasswordPage/ChangePasswordContainer";
import LoginContainer from "./pages/LoginPage/LoginContainer";
import FeedbackContainer from "./pages/FeedbackPage/FeedbackContainer";
import SelectRestaurantContainer from "./pages/SelectRestaurant/SelectRestaurantContainer";
import CalorieContainer from "./pages/CalorieCalculator/CalorieContainer";
import NavigateContainer from "./pages/NavigateRestaurant/NavigateContainer";
import RecommendContainer from "./pages/RecommendRestaurant/RecommendContainer";
import SearchContainer from "./pages/SearchRestaurant/SearchContainer";
import SignupContainer from "./pages/SignupPage/SignupContainer";
import HomeContainer from "./pages/HomePage/HomeContainer";
import ForgotPasswordContainer from "./pages/ForgotPasswordPage/ForgotPasswordContainer";
import FoodNutritionContainer from "./pages/FoodNutritionPage/FoodNutritionContainer";
import FoodCategoryContainer from "./pages/FoodCategoryPage/FoodCategoryContainer";
import FoodSearchContainer from "./pages/FoodSearchPage/FoodSearchContainer";
import FoodItemContainer from "./pages/FoodCategoryItemPage/FoodItemContainer";
import NotFoundContainer from "./pages/NotFoundPage/NotFoundContainer";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="/home" element={<HomeContainer />} />
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
          <Route path="/feedback/:id" element={<FeedbackContainer />} />
          <Route
            path="/navigate-restaurant/:id"
            element={<NavigateContainer />}
          />
          <Route
            path="/recommend-restaurant"
            element={<RecommendContainer />}
          />
          <Route path="/calorie-calculator" element={<CalorieContainer />} />
          <Route path="/search-restaurant" element={<SearchContainer />} />
          <Route
            path="/select-restaurant/:id"
            element={<SelectRestaurantContainer />}
          />
          <Route path="/signup" element={<SignupContainer />} />
          <Route
            path="/forgot-password"
            element={<ForgotPasswordContainer />}
          />
          <Route path="/food-search" element={<FoodSearchContainer />} />
          <Route path="/nutrition/:id" element={<FoodNutritionContainer />} />
          <Route path="/food-categories" element={<FoodCategoryContainer />} />
          <Route path="/food-categories/:id" element={<FoodItemContainer />} />
          <Route path="*" element={<NotFoundContainer />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
