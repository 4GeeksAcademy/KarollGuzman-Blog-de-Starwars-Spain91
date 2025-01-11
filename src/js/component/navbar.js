import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const favsCount = store.favorites.length;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#000000" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=SF+Distant+Galaxy&display=swap"
        rel="stylesheet"
      />
      <div className="container d-flex justify-content-center" style={{ height: '15vh' }}>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
            alt="Star Wars Logo"
            style={{ height: '90px' }} 
          />
        </div>
      </div>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item me-3 me-lg-0 dropdown">
          <button
            className="btn btn-warning dropdown-toggle text-black"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            style={{ marginRight: '50px' }}
          >
            Favorites: {favsCount}
          </button>

          <div
            className="dropdown-menu text-black" // Alinea el dropdown a la derecha
            aria-labelledby="dropdownMenu2"
          >
            <ul>
              {store.favorites.map((favorite, index) => (
                <li key={index} className="d-flex justify-content-between align-items-center">
                  {favorite}
                  <RiDeleteBin6Fill
                    className="deleteIcon"
                    onClick={() => actions.deleteFavorite(index)}
                    style={{ cursor: 'pointer' }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};