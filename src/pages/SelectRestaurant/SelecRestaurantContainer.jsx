import HomePageNavBar from "../../components/HomePageNavBar";
import BackButton from "../../components/BackButton";
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
      <BackButton />
      <SelectRestaurantDetails />
    </div>
  );
};

export default SelectRestaurantContainer;