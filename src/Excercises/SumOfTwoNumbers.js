/** 
  Challenge: Make this app work like a calculator that can add two numbers.
  
  Functionality: When user place numbers on first and second input and hit the button. The sum should appear on the `Total: ` as an output. 
  
  Solution: https://codepen.io/angelo_jin/pen/BawrWzy
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/

import { useState } from "react";

function SumOfTwoNumbers() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(0);

  const handleFirstNumber = (event) => {
    setNumber1(event.target.value);
  };
  const handleSecondNumber = (event) => {
    setNumber2(event.target.value);
  };

  const handleSum = () => {
    setTotal(parseInt(number1) + parseInt(number2));
  };

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input
        placeholder="First Number"
        type="number"
        onChange={handleFirstNumber}
      />
      <input
        placeholder="Second Number"
        type="number"
        onChange={handleSecondNumber}
      />

      <button onClick={handleSum}>Add Two Numbers</button>
      <p>Total:{total}</p>
    </div>
  );
}
export default SumOfTwoNumbers;
