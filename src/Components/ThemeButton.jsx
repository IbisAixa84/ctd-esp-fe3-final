import React from "react";
import "../App";
import { useGlobalState } from "./utils/Context";


export default function SwitchButton() {
  
  const {state, dispatch} = useGlobalState()
  const darkMode = state.darkMode

  const onClick = () => {
    if (darkMode) {
      dispatch({ type: "LIGHTMODE" });
    } else {
      dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={onClick}>
        {/* {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}  */}
     Change theme
     
    </button>
  );
}