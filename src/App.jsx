import { useEffect, useState } from "react";
import { CharacterList, NavePage } from "./components";
import { useCounter } from "./hooks/useCounter";
import logoRickAndMorty from "./assets/images/rick-and-morty-logo.webp";

export const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const { counter, increment, reduce } = useCounter();

  const getCharacters = async (pageNumber) => {
    const url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;
    const res = await fetch(url);
    const data = await res.json();

    // console.log(data.results);
    setLoading(false);
    setCharacters(data.results);
  };

  useEffect(() => {
    getCharacters(counter);
  }, [counter]);

  return (
    <>
      <img src={logoRickAndMorty} className="logo" alt="" />

      <h1>Rick and Morty characters</h1>

      <NavePage counter={counter} increment={increment} reduce={reduce} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <CharacterList characters={characters} />
      )}
    </>
  );
};
