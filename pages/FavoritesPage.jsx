import { useContext } from "react";
import { GlobalContext } from "../src/context/GlobalContext";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <h1 className="fw-bold mb-4">Preferiti</h1>
        </div>

        {favorites.length === 0 && (
          <div className="col-12">
            <p>Non hai ancora aggiunto nessun prodotto</p>
          </div>
        )}

        {favorites.map((product) => (
          <div className="col-12 mb-3" key={product.id}>
            <div className="d-flex justify-content-between align-items-center detail-card">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-thumb d-none d-sm-inline ms-1"
                />
                <h4 className="mb-0">{product.title}</h4>
              </div>

              <div className="d-flex gap-1">
                <button
                  className="add-to-list fs-5"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <i className="fa-solid fa-info"></i>
                </button>

                <button
                  className="add-to-list fs-5"
                  onClick={() => removeFromFavorites(product.id)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
