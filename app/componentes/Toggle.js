import { useState } from "react";
export default function  Toggle (){
    const[on, setOn] = useState(false);
  
    return(
      <button className={on?"btnOn":"btnOff"} onClick = {() => setOn(!on)}>
        {on ? "on" : "off"}
      </button>
    )
  }