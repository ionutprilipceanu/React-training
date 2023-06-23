import React, { useState } from "react";

const AddDelete = () => {
  const [itemList, setItemList] = useState([]);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setItemList([...itemList, value]);
    setValue("");
  };

  const deleteItem = (value) => {
    setItemList(itemList.filter((element) => element !== value));
  };

  return (
    <div>
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <button onClick={handleClick}>Add item</button>
      </div>

      <ul>
        {itemList.map((item, index) => {
          return (
            <li key={index} onClick={() => deleteItem(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AddDelete;
