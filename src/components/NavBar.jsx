import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: relative;
  margin: 0;
  padding: 0 1.5rem;
  height: 5.0rem;
  width: 55rem;
  ul {
    display: flex;
    width: 50rem;
    justify-content: space-around;
    li{
      margin: 2rem 1.0rem;
      font-size: 2.0rem;
      font-weight: 300;
      list-style: none;
      a{
        text-decoration: none;
        color: #2b2b2b;
      }
    }
  }
`;

export const NavBar = () => {
  return (
    <>
      <Nav>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/about">Cuenta</a>
          </li>
          <li>
            <a href="/contact">Mis compras</a>
          </li>
          <li>
            <a href="/contact">Productos</a>
          </li>
        </ul>
      </Nav>
    </>
  );
};
