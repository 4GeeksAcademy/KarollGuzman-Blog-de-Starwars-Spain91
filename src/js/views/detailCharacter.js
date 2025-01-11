import React, { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Context } from "../store/appContext";

const DetailCharacter = () => {
  const params = useParams();
  const { actions, store } = useContext(Context);
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getCharacterDetail(params.theid);
    

  }, [actions, params.theid]);

  useEffect(() => {
    setCharacter(store.selectedCharacter);
  }, [store.selectedCharacter]);

  if (!character) {
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
          src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}
          className="card-img-left"
          alt="Character"
          style={{
            width: "40%", 
            objectFit: "cover",
            borderRadius: "8px",
            marginRight: "20px",
          }}
        />
        <div className="card-body" style={{ width: "60%" }}> 
          <h5 className="card-title">{character.result?.properties?.name}</h5>
          <p><strong>Height:</strong> {character.result?.properties?.height}</p>
          <p><strong>Skin Color:</strong> {character.result?.properties?.skin_color}</p>
          <p><strong>Mass:</strong> {character.result?.properties?.mass}</p>
          <p><strong>Hair Color:</strong> {character.result?.properties?.hair_color}</p>
          <p><strong>Eye Color:</strong> {character.result?.properties?.eye_color}</p>
          <p><strong>Birth Year:</strong> {character.result?.properties?.birth_year}</p>
          <p><strong>Created:</strong> {character.result?.properties?.created}</p>
          <p><strong>Gender:</strong> {character.result?.properties?.gender}</p>
          <p><strong>Edited:</strong> {character.result?.properties?.edited}</p>
          <p><strong>URL:</strong> {character.result?.properties?.homeworld}</p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default DetailCharacter;