import PropTypes from "prop-types";
import { CharacterCard } from "./";

export const CharacterList = ({ characters }) => {
  return (
    <div className="character-container">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          {...character}
          episodeUrl={character.episode[0]}
        />
      ))}
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array,
};
