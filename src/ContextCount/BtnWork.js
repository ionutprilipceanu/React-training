import React, { useContext } from "react";
import ContextHook from "./ContextHook";

const BtnWork = () => {
  const [msg, setMsg] = useContext(ContextHook);
  const handleClick = () => {
    setMsg(msg + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default BtnWork;
