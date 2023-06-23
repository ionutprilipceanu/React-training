import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const UseReducerComp = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div>
      <button onClick={() => increment()}>Increment</button>
      {state.count}
    </div>
  );
};

export default UseReducerComp;
