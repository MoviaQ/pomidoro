import { useState } from "react";

function YellowButton(props) {



  return (
    <button
      onClick={props.func}
      className="bg-amber-300 hover:bg-amber-500 transition ease-in-out hover:scale-110  duration-300 p-2 border-2 border-black rounded-lg m-5"
    >
    
     {props.text}
    </button>
  );
}

export default YellowButton;
