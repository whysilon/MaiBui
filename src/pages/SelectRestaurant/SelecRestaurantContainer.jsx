import HomePageNavBar from "../../components/HomePageNavBar";
import BackButton from "../../components/BackButton";
import SelectRestaurantDetails from "./SelectRestaurantDetails";

const SelectRestaurantContainer = () => {
  return (
    <div>
      <BackButton />
      <SelectRestaurantDetails />
    </div>
  );
};

export default SelectRestaurantContainer;