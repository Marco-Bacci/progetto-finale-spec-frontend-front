import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container text-center py-5">
      <h1>Ops! La pagina che hai cercato non esiste!</h1>
      <Link to="/" className="btn add-to-list fs-3 mt-3">
        Torna alla home
      </Link>
    </div>
  );
};

export default NotFoundPage;
