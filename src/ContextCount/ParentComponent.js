import React, { useState } from "react";
import ChildMessage from "./ChildMessage";
import ContextHook from "./ContextHook";
const ParentComponent = () => {
  const [msg, setMsg] = useState(0);
  return (
    <ContextHook.Provider value={[msg, setMsg]}>
      <div>
        <h3>{msg}</h3>
        <ChildMessage />
      </div>
    </ContextHook.Provider>
  );
};

export default ParentComponent;
