/**
 * Displays HomeButton component, which is a button that navigates to the home page.
 * @author Xing Mian
 * @return HTML of Home Button
 */

import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * The HomeButton component is a button that navigates to the home page.
 * @returns {JSX.Element} The HomeButton component.
 */
function HomeButton() {
  const navigate = useNavigate();

  //style
  const style = {
    marginRight: "30px",
    marginTop: "auto",
    width: "3rem",
    height: "3rem",
    cursor: "pointer",
    padding: "1px"
  };

  /**
   * This function handles the click event for the HomeButton component.
   */
  function handleClick() {
    console.log("Home button clicked");
    navigate("/home");
  }

  return (  
    //TODO: change to IconButton
    <div>
    
        <img
          alt="Home Button"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63eaee595a7e3f031030d055/63eaf4d142b69d0011f65b03/16763425968649173759.png"
          style={style}
          onClick={handleClick}
          className="justify-end flex-row"
        />
    </div>
  );
}

export default HomeButton;
