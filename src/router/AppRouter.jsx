import { Route, Routes } from "react-router-dom";
import { CharacterPage } from "../pages/character/CharacterPage";
import { CharacterDetailPage } from "../pages/character/CharacterDetailPage";
import { Page404 } from "../pages/page404/Page404";
import { Header } from "../components/header/Header";

export const AppRouter = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<CharacterPage />} />
        <Route path="/character/:id" element={<CharacterDetailPage />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
