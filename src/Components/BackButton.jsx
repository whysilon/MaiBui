import React from "react";
import { useNavigate } from "react-router-dom";
// TODO: functionality

function BackButton() {
  const navigate = useNavigate();

  //style
  const style = {
    marginRight: "1px",
    marginTop: "2.5px",
    width: "4rem",
    height: "4rem",
  };

  function handleBackClick() {
    console.log("Back Button clicked");
    navigate(-1);
  }

  return (
    <img
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63eaee595a7e3f031030d055/63eaf4d142b69d0011f65b03/16763425892709961737.png"
      alt="Back"
      style={style}
      onClick={handleBackClick}
      className="items-start"
    ></img>
  );
}

export default BackButton;
