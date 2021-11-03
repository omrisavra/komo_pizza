import React from "react";

const Toppings = () => {
  return (
    <div className="inputContinaer">
      <input type="text" placeholder="Topping..."></input>
      <input type="number" placeholder="Price..."></input>
      <button onClick={() => console.log("hello")}>Add topping</button>
    </div>
  );
};

export default Toppings;
