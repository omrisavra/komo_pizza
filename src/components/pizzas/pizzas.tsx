import { useQuery } from "urql";

import { PizzaWrapper } from "./pizzas.styles";

const pizzaQuery = `query MyQuery {
    pizzas {
      name
      price
      toppings
    }
  }`;

interface PizzaTypes {
  name: string;
  price: number;
  toppings: string[];
}

const PizzaContainer = (pizza: PizzaTypes) => {
  return (
    <li key={pizza.name}>
      <h2>{pizza.name}</h2>
      <h2>{pizza.price}</h2>
      <h2>{pizza.toppings}</h2>
    </li>
  );
};

const Pizzas = () => {
  const [result, _reexecuteQuery] = useQuery({
    query: pizzaQuery,
  });
  const { data, fetching, error } = result;
  if (data) {
    return (
      <div>
        <ul className="pizza-list">
          <PizzaWrapper>
            {data.pizzas.map((pizza: PizzaTypes) => {
              return <PizzaContainer {...pizza} />;
            })}
          </PizzaWrapper>
        </ul>
      </div>
    );
  }

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return <div />;
};

export default Pizzas;
