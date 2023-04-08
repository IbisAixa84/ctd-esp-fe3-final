import React from "react"
import "../App"
import { useGlobalState } from "./utils/global.context"


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
        {darkMode ? <>☀️</> : <>🌙</>}         
    </button>
  );
}