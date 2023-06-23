import React, { useReducer, useRef } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const reference = useRef(null);
  const handleClick = () => {
    reference.current.value = "";
  };
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      {state.count}

      <div>
        <input placeholder="Write something here..." ref={reference} />
        <button onClick={handleClick}>Click</button>
      </div>
    </div>
  );
};

export default UseReducer;
