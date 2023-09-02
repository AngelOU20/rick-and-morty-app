import PropTypes from "prop-types";
import { Character } from "./Character";

export const CharacterList = ({ characters }) => {
  return (
    <div className="character-container">
      {characters.map((character) => (
        <Character
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
