import { GlobalContext } from "../src/context/GlobalContext";
import { useContext } from "react";
const ComparisonPage = ({ comparison, removeFromComparison }) => {
  const { toggleFavorite, isFavorite } = useContext(GlobalContext);

  return (
    <>
      <h1 className="text-center">Compara</h1>
      <div className="container">
        <div className="row g-2 mb-4">
          {comparison.length === 0 && (
            <div className="col-12">
              <h3 className="text-center m-5 text-danger">
                Non hai ancora aggiunto nessun prodotto al comparatore
              </h3>
            </div>
          )}
          {comparison.map((product) => {
            const fav = isFavorite(product.id);
            return (
              <div
                className={`col-12 col-sm-6  ${
                  comparison.length <= 2
                    ? "col-lg-6"
                    : comparison.length === 3
                    ? "col-lg-4"
                    : "col-lg-3"
                }`}
                key={product.id}
              >
                <div className="detail-card  h-100 ">
                  <div className="col-12">
                    <div className="product-image ">
                      <img
                        className="img-fluid"
                        src={product.imageUrl}
                        alt={product.title}
                      />
                    </div>
                    <div className="col-12 general-info">
                      <div className="card-body mb-3">
                        <h3 className="card-title text-danger mt-4 fs-3">
                          {product.title}
                        </h3>
                        <p className="card-text">{product.category}</p>
                      </div>
                      <button
                        className={`add-to-list mb-3 ${fav ? "favorite" : ""}`}
                        onClick={() => {
                          toggleFavorite(product);
                        }}
                      >
                        <i className="fa-solid fa-star fs-4"></i>
                      </button>

                      <button
                        className="add-to-list fs-5"
                        onClick={() => {
                          const confirmed = window.confirm(
                            "Sei sicuro di voler rimuovere questo prodotto dal comparatore?"
                          );

                          if (confirmed) {
                            removeFromComparison(product.id);
                          }
                        }}
                      >
                        <i className="fa-solid fa-xmark fs-4"></i>
                      </button>

                      <div className="fs-0-8">
                        {" "}
                        <p>
                          <span>Marca:</span>
                          {product.brand}
                        </p>
                        <p>
                          <span>Prezzo:</span> {product.price} €
                        </p>
                        <p>
                          <span>wireless:</span>{" "}
                          {product.wireless === true ? "Sì" : "No"}
                        </p>
                        <p>
                          <span>Noise Canceling:</span>{" "}
                          {product.noiseCancelling === true ? "Sì" : "No"}
                        </p>
                        <p>
                          <span>batteria:</span> {product.batteryLifeHours}h
                        </p>
                        <p>
                          {" "}
                          <span>Microfono:</span>
                          {product.microphone === true ? "Sì" : "No"}
                        </p>
                        <p>
                          <span>peso:</span> {product.weightGrams} g
                        </p>
                        <p>
                          <span>Descrizione:</span> {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ComparisonPage;
