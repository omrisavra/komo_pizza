import { FC, useMemo } from "react";
import { Client, Provider } from "urql";
import Navbar from "./components/navbar/navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import GlobalStyles from "./styles/global";
import Toppings from "./components/toppings/toppings";
import Pizzas from "./components/pizzas/pizzas";
import Orders from "./components/Orders/orders";

const App: FC = () => {
  const gqlServer = "http://localhost:8080/v1/graphql";
  const urqlClient = useMemo(() => new Client({ url: gqlServer }), [gqlServer]);
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Navbar />
        <Switch>
          <Provider value={urqlClient}>
            <Redirect exact from="/" to="/pizzas" />
            <Route path="/toppings" component={Toppings} />
            <Route path="/orders" component={Orders} />
            <Route path="/pizzas" component={Pizzas} />
          </Provider>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
