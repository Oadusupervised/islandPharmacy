import { useState } from "react";

function Button({ color = "blue", disabled = false, children }) {
  const [isDisabled, setIsDisabled] = useState(disabled);
  const [colorState, setColorState] = useState(color);

  return (
    <button
      onClick={() => {
        setColorState("orange");
        setIsDisabled(true); // Cambiado a booleano
      }}
      style={{ backgroundColor: colorState }}
      disabled={isDisabled} // Corrección de `disable` a `disabled`
      className={`px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 ${
        isDisabled ? "opacity-50 cursor-not-allowed" : "hover:brightness-110"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
