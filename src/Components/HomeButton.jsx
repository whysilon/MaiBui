import { useNavigate } from "react-router-dom";
// TODO:Functionality

function HomeButton() {
  let history = useNavigate();

  function handleClick() {
    console.log("Home button is clicked");
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

export default HomeButton;
