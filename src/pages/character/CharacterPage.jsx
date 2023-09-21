import { useEffect, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { CharacterList, NavePage } from "../../components";

import "../../assets/css/character/Character.css";
import { PageLoading } from "../loading/PageLoading";

export const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const { counter, increment, reduce } = useCounter();

  const getCharacters = async (pageNumber) => {
    const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;
    const res = await fetch(url);
    const data = await res.json();

    setLoading(false);
    setCharacters(data.results);
  };

  useEffect(() => {
    getCharacters(counter);
  }, [counter]);

  return (
    <>
      <h1 className="title">Rick and Morty Characters</h1>

      {loading ? (
        <PageLoading />
      ) : (
        <>
          <NavePage counter={counter} increment={increment} reduce={reduce} />
          <CharacterList characters={characters} />
          <NavePage counter={counter} increment={increment} reduce={reduce} />
        </>
      )}
    </>
  );
};
