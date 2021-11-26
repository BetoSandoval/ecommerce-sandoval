import React from "react";
import Headder from "../assets/styles/elements/Headder";
import CarWidget from "./CarWidget";
import { NavBar } from "./NavBar";


const Header = () => {

  return (
    <Headder>
      <div className="container">
        <div className="inner">
          <div className="logo">E-commerce</div>

          <div className="menu">
            <NavBar/>

            <CarWidget/>
          </div>
        </div>
      </div>
    </Headder>
  );
};

export default Header;
