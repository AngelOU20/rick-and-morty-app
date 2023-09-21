import image from "../../assets/images/page404.png";
import "../../assets/css/404.css";

export const Page404 = () => {
  return (
    <main className="content-error-page">
      <h1 className="title-error">Error 404</h1>
      <p className="notfound-text">Page not found</p>
      <img className="error-image" src={image} alt="Doguito" />
    </main>
  );
};
