import React from "react";
import { useContext } from "react";
import context from "./Context";

const Button = () => {
  const [count, setCount] = useContext(context);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Button;
