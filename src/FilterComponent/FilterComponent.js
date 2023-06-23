import { useState } from "react";

const itemList = [
  "Awesome Concrete Fish",
  "Awesome Fresh Table",
  "Awesome Frozen Table",
  "Awesome Rubber Chair",
  "Awesome Rubber Pants",
  "Awesome Wooden Chips",
  "Ergonomic Concrete Chair",
  "Ergonomic Concrete Gloves",
  "Ergonomic Concrete Tuna",
  "Ergonomic Frozen Soap",
  "Ergonomic Metal Hat",
  "Ergonomic Plastic Cheese",
  "Ergonomic Rubber Hat",
  "Ergonomic Rubber Keyboard",
  "Ergonomic Rubber Soap",
  "Fantastic Concrete Sausages",
  "Fantastic Cotton Ball",
  "Fantastic Steel Pants",
  "Fantastic Wooden Chips",
  "Generic Cotton Cheese",
  "Generic Frozen Shoes",
  "Generic Steel Fish",
  "Gorgeous Concrete Bike",
  "Gorgeous Concrete Chips",
  "Gorgeous Frozen Computer",
  "Gorgeous Granite Soap",
  "Gorgeous Soft Soap",
  "Gorgeous Steel Computer",
  "Handcrafted Cotton Soap",
  "Handcrafted Fresh Bike",
  "Handcrafted Rubber Gloves",
  "Handcrafted Soft Fish",
  "Handcrafted Wooden Chair",
  "Handmade Cotton Table",
  "Handmade Fresh Tuna",
  "Handmade Frozen Pizza",
  "Handmade Metal Pizza",
  "Handmade Wooden Chips",
  "Handmade Wooden Towels",
  "Incredible Cotton Shirt",
  "Incredible Metal Table",
  "Intelligent Cotton Shoes",
  "Intelligent Cotton Tuna",
  "Intelligent Fresh Computer",
  "Intelligent Fresh Shirt",
  "Intelligent Frozen Soap",
  "Intelligent Granite Chips",
  "Intelligent Plastic Soap",
  "Intelligent Rubber Computer",
  "Intelligent Steel Gloves",
  "Intelligent Wooden Table",
  "Licensed Concrete Tuna",
  "Licensed Cotton Bacon",
  "Licensed Cotton Pants",
  "Licensed Frozen Bike",
  "Licensed Frozen Mouse",
  "Licensed Soft Chips",
  "Licensed Steel Soap",
  "Practical Concrete Mouse",
  "Practical Cotton Chicken",
  "Practical Fresh Computer",
  "Practical Granite Chips",
  "Practical Plastic Chicken",
  "Practical Rubber Chair",
  "Practical Steel Soap",
  "Practical Steel Table",
  "Practical Wooden Hat",
  "Refined Concrete Sausages",
  "Refined Cotton Sausages",
  "Refined Cotton Table",
  "Refined Fresh Car",
  "Refined Granite Ball",
  "Refined Metal Pants",
  "Refined Rubber Mouse",
  "Refined Steel Bike",
  "Rustic Steel Car",
  "Rustic Wooden Pants",
  "Sleek Cotton Bacon",
  "Sleek Plastic Mouse",
  "Sleek Plastic Table",
  "Sleek Plastic Towels",
  "Small Fresh Fish",
  "Small Frozen Cheese",
  "Small Frozen Chicken",
  "Small Frozen Chips",
  "Tasty Cotton Tuna",
  "Tasty Frozen Hat",
  "Tasty Wooden Chair",
  "Unbranded Concrete Fish",
  "Unbranded Concrete Hat",
  "Unbranded Concrete Sausages",
  "Unbranded Cotton Salad",
  "Unbranded Granite Chicken",
  "Unbranded Granite Mouse",
  "Unbranded Plastic Shoes",
  "Unbranded Steel Chicken",
  "Unbranded Steel Table",
  "Unbranded Wooden Soap",
  "Unbranded Wooden Tuna",
];

function FilterComponent() {
  const [FilterItems, setFilterItems] = useState(itemList);
  const handleChange = (event) => {
    const filterElement = itemList.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase().trim()) !==
        -1
    );
    setFilterItems(filterElement);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      {FilterItems.map((element) => {
        return <li>{element}</li>;
      })}
    </div>
  );
}

export default FilterComponent;
