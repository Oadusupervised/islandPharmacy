import { useState } from "react";

function Button(props) {
    const {color,disabled,children} = props;

    const [isDisabled, setIsDisabled] = useState(disabled);
    const [colorState, setColorState] = useState("white");

  return (
    <button
        onClick={()=>{
            setColorState("orange");
            setIsDisabled("true")
        }}
        style={{backgroundColor:colorState}}
        disable={isDisabled}
        >
            {children}
    </button>

  )
}

export default Button
