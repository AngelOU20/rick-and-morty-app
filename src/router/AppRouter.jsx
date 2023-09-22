import { Route, Routes } from "react-router-dom";
import { CharacterPage, CharacterDetailPage, Page404 } from "../pages";
import { Header } from "../components/";

export const AppRouter = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/character/:id" element={<CharacterDetailPage />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
