import logoRickAndMorty from "./assets/images/rick-and-morty-logo.webp";
import { CharacterPage } from "./pages/character/CharacterPage";

export const App = () => {
  return (
    <div className="container">
      <img src={logoRickAndMorty} className="logo" alt="" />

      <h1>Rick and Morty characters</h1>

      <CharacterPage />
    </div>
  );
};
