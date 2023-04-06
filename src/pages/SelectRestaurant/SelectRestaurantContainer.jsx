import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import SelectRestaurantDetails from "./SelectRestaurantDetails";

/**
 * Displays the restaurant details after
 * restaurant has been selected
 * 
 * 
 * @author Marcus Yeo
 * @returns HomePageNavBar and SelectRestaurantDetails 
 * components
 */

const SelectRestaurantContainer = () => {
  return (
    <div>
      <AccountCenterNavBar />
      <SelectRestaurantDetails />
    </div>
  );
};

export default SelectRestaurantContainer;