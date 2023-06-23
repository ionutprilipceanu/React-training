/** 
  Challenge: User should be able to type in any characters on input and those character should show in the browser.
  
  Solution: https://codepen.io/angelo_jin/pen/yLzvMop
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/

import { useState } from "react";
function DisabledInputIfInputEmpty() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value.trim());
  };

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type="text" onChange={handleChange} />
      <button disabled={!value}>Submit</button>

      <p>{value}</p>
    </>
  );
}

export default DisabledInputIfInputEmpty;
