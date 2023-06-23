/** 
  Challenge: User should be able to type in any characters on input and those character should show in the browser.
  
  Solution: https://codepen.io/angelo_jin/pen/yLzvMop
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/

import { useState } from "react";
function TwoWayBinding() {
  const [showInput, setShowInput] = useState("");

  const handleChange = (event) => {
    setShowInput(event.target.value);
  };

  return (
    <>
      <input type="text" placeholder="Enter Text" onChange={handleChange} />
      <p>{showInput}</p>
    </>
  );
}

export default TwoWayBinding;
