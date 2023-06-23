import React, { useState } from "react";
import context from "./Context";
import Child from "./Child";

const Main = () => {
  const [count, setCount] = useState(0);
  return (
    <context.Provider value={[count, setCount]}>
      <div>
        <Child />

        {count}
      </div>
    </context.Provider>
  );
};

export default Main;
