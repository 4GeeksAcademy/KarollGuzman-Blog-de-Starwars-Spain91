import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

const Card = ({ name, type, id, uid }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    // Verificar si esta carta específica es favorita
    const isFavorite = store.favorites.some(
        (fav) => fav.uid === uid && fav.type === type
    );

    const toggleFavorite = (e) => {
        e.stopPropagation(); // Detener la propagación del evento
        e.preventDefault(); // Prevenir el comportamiento por defecto
        actions.addToFavorites({ uid, type, name }); // Llama a la acción del flux
    };

    return (
        <div className="card card-fixed" style={{ width: "18rem" }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
                className="card-img-top"
                alt={name}
            />
            <div className="card-body">
                <h5 className="card-title text-truncate">{name}</h5>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => navigate(`/detail-${type}/${uid}`)}
                    >
                        View More
                    </button>
                    <button
                        className="btn btn-outline-danger"
                        onClick={toggleFavorite}
                    >
                        <i
                            className={`fa-heart ${
                                isFavorite ? "fa-solid text-danger" : "fa-regular"
                            }`}
                        ></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;