import React, { useState } from "react";
import gql from "graphql-tag";

import { useMutation } from "urql";
import InputWrapper from "./toppings.styles";

const addPizzaQuery = gql`
  mutation MyQuery($name: String, $price: Int, $toppings: jsonb) {
    insert_pizzas_one(
      object: { name: $name, price: $price, toppings: $toppings }
    ) {
      name
    }
  }
`;

const Toppings = () => {
  const [state, executeMutation] = useMutation(addPizzaQuery);

  const addPizza = React.useCallback(
    (name: string, price: number, toppings: string[]) => {
      if (!state.fetching) {
        executeMutation({ name: name, price: price, toppings: toppings });
      }
    },
    [state.fetching, executeMutation]
  );
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [toppings, setToppings] = useState("");

  return (
    <div className="inputContinaer">
      <InputWrapper
        type="text"
        placeholder="Name..."
        value={name}
        onInput={(e) => setName(e.currentTarget.value)}
      />
      <InputWrapper
        type="number"
        placeholder="Price..."
        value={price}
        onInput={(e) => setPrice(+e.currentTarget.value)}
      />
      <InputWrapper
        type="text"
        placeholder="Toppings..."
        value={toppings}
        onInput={(e) => setToppings(e.currentTarget.value)}
      />
      <button onClick={() => addPizza(name, price, [toppings])}>
        Add topping
      </button>
    </div>
  );
};

export default Toppings;
