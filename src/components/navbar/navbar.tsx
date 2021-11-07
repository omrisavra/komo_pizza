import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbar.styles";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/pizzas">Pizzas</NavLink>
          <NavLink to="/toppings">Toppings</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/orders">orders</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
