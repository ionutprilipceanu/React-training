import React, { useState } from "react";
import Context from "./Context";
import ChildApp from "./ChildApp";

const ParentApp = () => {
  const [count, setCount] = useState(0);
  return (
    <Context.Provider value={[count, setCount]}>
      <div>
        {count}
        <ChildApp />
      </div>
    </Context.Provider>
  );
};

export default ParentApp;
