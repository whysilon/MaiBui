import React from "react";
import { useNavigate } from "react-router-dom";
// TODO: functionality

function BackButton() {
  const history = useNavigate();

  function handleBackClick() {
    history.goBack();
  }

  return (
    <img
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63eaee595a7e3f031030d055/63eaf4d142b69d0011f65b03/16763425892709961737.png"
      onClick={handleBackClick}
    >
      Back
    </img>
  );
}

export default BackButton;
