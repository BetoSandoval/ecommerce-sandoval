import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/" exact>Home</Link>
          </li>
          <li>
            <Link to="/category/men's clothing">Men's</Link>
          </li>
          <li>
            <Link to="/category/women's clothing">Women's</Link>
          </li>
          <li>
            <Link to="/category/jewlery">Jewelery</Link>
          </li>
          <li>
            <Link to="/category/electronics">Electronics</Link>
          </li>
        </ul>
      </Nav>
    </>
  );
};
