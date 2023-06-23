import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function ReducerComponent() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? (
        <h3>Valuable Information I shouldn't see</h3>
      ) : (
        "Please login"
      )}
    </div>
  );
}

export default ReducerComponent;
