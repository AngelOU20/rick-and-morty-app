import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CharacterCard = ({
  id,
  image,
  name,
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
    <div className="card">
      <div className="card-image">
        <img className="character-image" src={image} alt={name} />
      </div>
      <div className="card-content">
        <Link to={`/character/${id}`} className="character-link">
          <h2 className="card-title">{name}</h2>
        </Link>
        <div className="card-description">
          <div className="character-status-species">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 14 14"
              fill="none"
            >
              <circle
                cx="7"
                cy="7"
                r="7"
                fill={
                  status === "Alive"
                    ? "#55cc44"
                    : status === "Dead"
                    ? "#d63d2e"
                    : "#9e9e9e"
                }
              />
            </svg>{" "}
            <span>
              {status} - {species}
            </span>
          </div>
          <p className="character-location">
            <span className="location-label">Last known location:</span>
            <br />
            <span>{location.name}</span>
          </p>
          <p className="character-episode">
            <span className="episode-label">First seen in:</span>
            <br />
            <span>{episodeName}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number,
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
