import { Route, Routes } from "react-router-dom";
import { CharacterPage } from "../pages/character/CharacterPage";
import { CharacterDetailPage } from "../pages/character/CharacterDetailPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CharacterPage />} />

      <Route path="/detail" element={<CharacterDetailPage />} />
    </Routes>
  );
};
