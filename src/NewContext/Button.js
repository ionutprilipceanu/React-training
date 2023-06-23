import React, { useContext } from "react";
import Context from "./Context";

const Button = () => {
  const [count, setCount] = useContext(Context);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Button;
