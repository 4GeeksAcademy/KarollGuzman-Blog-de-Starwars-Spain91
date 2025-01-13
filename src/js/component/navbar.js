import React, { useContext } from "react";
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
      <div className="container d-flex justify-content-between align-items-center" style={{ height: '15vh' }}>
        <div className="d-flex align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
            alt="Star Wars Logo"
            style={{ height: '90px' }} 
          />
        </div>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item me-3 me-lg-0 dropdown">
            <button
              className="btn btn-warning dropdown-toggle text-black"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ marginRight: '50px' }}
            >
              Favorites: {favsCount}
            </button>
            <div
              className="dropdown-menu text-black"
              aria-labelledby="dropdownMenu2"
            >
              {store.favorites.length === 0 ? (
                <span className="dropdown-item">No favorites</span>
              ) : (
                store.favorites.map((favorite, index) => (
                  <div key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                    {favorite}
                    <RiDeleteBin6Fill
                      className="deleteIcon"
                      onClick={() => actions.deleteFavorite(index)}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                ))
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};