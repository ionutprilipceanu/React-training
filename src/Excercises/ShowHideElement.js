/**
  Challenge: Make the button functional
  A click on button should toggle (show/hide) the string `Toggle Challenge` each time it is pressed
  
  Solution: https://codepen.io/angelo_jin/pen/abLwyrL
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/

import { useState } from "react";
function ShowHideElement() {
  const [isShow, setIsShow] = useState(true);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <button onClick={handleShow}>Hide Element Below</button>

      {isShow ? <div>Toggle Challenge</div> : null}
    </>
  );
}

export default ShowHideElement;
