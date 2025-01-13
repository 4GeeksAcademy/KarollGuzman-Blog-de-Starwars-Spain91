import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacter();
    actions.getVehicles();
    actions.getPlanets();
  }, []);

  
  return (
    <div
      style={{
        backgroundImage: `url('https://images5.alphacoders.com/903/thumb-1920-903317.jpg')`,
        backgroundSize: 'fixed',
        backgroundPosition: 'center',
        padding: '20px',
      }}
    >
      <div className="container text-center">
        <h2 className="text-light mb-4">Characters</h2>
        <div className="row justify-content-center" style={{ gap: '10px' }}>
          {store.characters?.map((character) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={character.uid}>
              <div className="card-fixed position-relative">
                <Card
                  name={character.name}
                  type="characters"
                  id={character.uid}
                  imageStyle={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                
                <button
                  type="button"
                  className="position-absolute"
                  style={{
                    bottom: '10px',  
                    right: '20px',   
                    zIndex: '10',    
                    background: 'transparent',  
                    border: 'none',  
                    fontSize: '30px', 
                    cursor: 'pointer',
                  }}
                  onClick={() => actions.addToFavorites(character.name)}
                >
                  <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-light mb-4">Vehicles</h2>
        <div className="row justify-content-center" style={{ gap: '10px' }}>
          {store.vehicles?.map((vehicle) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={vehicle.uid}>
              <div className="card-fixed position-relative">
                <Card
                  name={vehicle.name}
                  type="vehicles"
                  id={vehicle.uid}
                  imageStyle={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                
                <button
                  type="button"
                  className="position-absolute"
                  style={{
                    bottom: '10px',  
                    right: '20px',   
                    zIndex: '10',    
                    background: 'transparent',  
                    border: 'none',  
                    fontSize: '30px', 
                    cursor: 'pointer', 
                  }}
                  onClick={() => actions.addToFavorites(vehicle.name)}
                >
                  <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-light mb-4">Planets</h2>
        <div className="row justify-content-center" style={{ gap: '10px' }}>
          {store.planets?.map((planet) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={planet.uid}>
              <div className="card-fixed position-relative">
                <Card
                  name={planet.name}
                  type="planets"
                  id={planet.uid}
                  imageStyle={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                
                <button
                  type="button"
                  className="position-absolute"
                  style={{
                    bottom: '10px',  
                    right: '20px',  
                    zIndex: '10',   
                    background: 'transparent', 
                    border: 'none',  
                    fontSize: '30px', 
                    cursor: 'pointer', 
                  }}
                  onClick={() => actions.addToFavorites(planet.name)}
                >
                  <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};