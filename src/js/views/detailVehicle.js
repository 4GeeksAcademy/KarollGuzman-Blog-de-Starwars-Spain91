import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { Context } from "../store/appContext";

const DetailVehicles = () => {
  const params = useParams();
  const { actions, store } = useContext(Context);
  const [vehicle, setVehicle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getVehicleDetail(params.theid);
  }, [actions, params.theid]);

  useEffect(() => {
    setVehicle(store.selectedVehicle);
  }, [store.selectedVehicle]);

  if (!vehicle) {
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
          src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`} 
          className="card-img-left" 
          alt={vehicle.result?.properties?.name || "Vehicle Image"} 
          style={{
            width: "40%", 
            objectFit: "cover",
            borderRadius: "8px",
            marginRight: "20px",
          }}
        />
        <div className="card-body" style={{ width: "60%" }}>
          <h5 className="card-title">{vehicle.result?.properties?.name}</h5>
          <p><strong>Model:</strong> {vehicle.result?.properties?.model}</p>
          <p><strong>Class:</strong> {vehicle.result?.properties?.vehicle_class}</p>
          <p><strong>Manufacturer:</strong> {vehicle.result?.properties?.manufacturer}</p>
          <p><strong>Cost in Credits:</strong> {vehicle.result?.properties?.cost_in_credits}</p>
          <p><strong>Length:</strong> {vehicle.result?.properties?.length}</p>
          <p><strong>Crew:</strong> {vehicle.result?.properties?.crew}</p>
          <p><strong>Passengers:</strong> {vehicle.result?.properties?.passengers}</p>
          <p><strong>Max Speed:</strong> {vehicle.result?.properties?.max_atmosphering_speed}</p>
          <p><strong>Cargo Capacity:</strong> {vehicle.result?.properties?.cargo_capacity}</p>
          <p><strong>URL:</strong> {vehicle.result?.properties?.url}</p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default DetailVehicles;