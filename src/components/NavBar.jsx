import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-md">
          <a className="navbar-brand" href="/">
            Mokrama
          </a>

          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active text-light bg-dark" aria-current="page" href="#">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light bg-dark" href="#">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light bg-dark" href="#">
                Ofertas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-light bg-dark">Carrito</a>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
};
