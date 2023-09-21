import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import "../../assets/css/character/CharacterDetail.css";

export const CharacterDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  const [fetchData, setFetchData] = useState([]);
  const { name, location, origin, gender, image, status, species } = fetchData;

  const getCharacter = async (id) => {
    const api = `https://rickandmortyapi.com/api/character/${id}`;
    const res = await fetch(api);
    const data = await res.json();
    setFetchData(data);
  };

  useEffect(() => {
    getCharacter(id);
  }, [id]);

  return (
    <>
      <div className="card-container">
        <div className="card-detail">
          <div className="card-detail__image">
            <FaArrowLeftLong className="arrow__back" onClick={onNavigateBack} />
            <img src={image} alt="" />
            <div className={`card-detail__status ${status}`}>
              <span className="status">{status}</span>
            </div>
          </div>
          <div className="card-detail__content">
            <h1 className="card-detail__name">{name}</h1>
            <p>Gender: {gender}</p>
            <p>Species: {species}</p>
            <p>Location: {location?.name}</p>
            <p className={`origin-${origin?.name}`}>Origin: {origin?.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};
