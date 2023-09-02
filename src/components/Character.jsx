import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Character = ({
  image,
  name,
  origin,
  status,
  species,
  location,
  episodeUrl,
}) => {
  const [episodeName, setEpisodeName] = useState(""); // Estado para el nombre del episodio

  useEffect(() => {
    // Función para obtener el nombre del episodio a partir de la URL
    const fetchEpisodeName = async () => {
      const res = await fetch(episodeUrl);
      const data = await res.json();
      setEpisodeName(data.name); // Establece el nombre del episodio en el estado
    };

    fetchEpisodeName();
  }, [episodeUrl]);

  return (
    <div className="character-card">
      <div className="inner-part">
        <div className="card-image">
          <img className="character-image" src={image} alt="" />
        </div>
        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <div className="card-description">
            <p>{origin.name}</p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
              >
                <circle
                  cx="7"
                  cy="7"
                  r="7"
                  fill={
                    status === "Alive"
                      ? "#00FF38"
                      : status === "Dead"
                      ? "#d63d2e"
                      : "#9e9e9e"
                  }
                />
              </svg>{" "}
              {status} - {species}
            </p>
            <p>
              Last known location:
              <br />
              {location.name}
            </p>
            <p>
              First seen in::
              <br />
              {episodeName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Character.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  origin: PropTypes.shape({
    name: PropTypes.string,
  }),
  status: PropTypes.string,
  species: PropTypes.string,
  location: PropTypes.shape({
    // Asegúrate de que location sea un objeto con la propiedad name
    name: PropTypes.string,
  }),
  episodeUrl: PropTypes.string,
};
