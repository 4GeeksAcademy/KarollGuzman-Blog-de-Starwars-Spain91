import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { Context } from "../store/appContext";

const DetailPlanet = () => {
  const params = useParams();
  const { actions, store } = useContext(Context);
  const [planet, setPlanet] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getPlanetDetail(params.theid); // Llama a la función para obtener los detalles del planeta
  }, [actions, params.theid]);

  useEffect(() => {
    setPlanet(store.selectedPlanet); // Actualiza el estado con el planeta seleccionado
  }, [store.selectedPlanet]);

  if (!planet) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        backgroundImage: `url('https://data.1freewallpapers.com/download/starry-sky-stars-black-glitter-3840x2160.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="card" style={{
        width: "80%", 
        maxWidth: "800px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        display: 'flex',
        alignItems: 'center',
      }}>
        <img 
          src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} 
          className="card-img-left" 
          alt={planet.result?.properties?.name || "Planet Image"} 
          style={{
            width: "40%", 
            objectFit: "cover",
            borderRadius: "8px",
            marginRight: "20px",
          }}
        />
        <div className="card-body" style={{ width: "60%" }}>
          <h5 className="card-title">{planet.result?.properties?.name}</h5>
          <p><strong>Diameter:</strong> {planet.result?.properties?.diameter}</p>
          <p><strong>Climate:</strong> {planet.result?.properties?.climate}</p>
          <p><strong>Gravity:</strong> {planet.result?.properties?.gravity}</p>
          <p><strong>Terrain:</strong> {planet.result?.properties?.terrain}</p>
          <p><strong>Population:</strong> {planet.result?.properties?.population}</p>
          <p><strong>Orbital Period:</strong> {planet.result?.properties?.orbital_period}</p>
          <p><strong>Rotation Period:</strong> {planet.result?.properties?.rotation_period}</p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default DetailPlanet;