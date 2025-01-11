import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

const Card = ({ name, type, id }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={
          name == "Tatooine"
            ? `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed97b542-8697-4d5c-a783-0dd8185c89d0/d15sn9h-b91d0d97-8378-4b8c-b943-dd1b39a21a84.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkOTdiNTQyLTg2OTctNGQ1Yy1hNzgzLTBkZDgxODVjODlkMFwvZDE1c245aC1iOTFkMGQ5Ny04Mzc4LTRiOGMtYjk0My1kZDFiMzlhMjFhODQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TbpQRH5usavAhtJl_KJ7Tg7eyJBgiVM7fwz7iddfc_4`
            : `https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => navigate(`/detail-${type}/${id}`)}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Card;