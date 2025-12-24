import { GlobalContext } from "../src/context/GlobalContext";
import { useContext } from "react";
const ComparisonPage = ({ comparison, removeFromComparison }) => {
  const { toggleFavorite, isFavorite } = useContext(GlobalContext);

  return (
    <>
      <h1 className="text-center">Compara</h1>
      <div className="container">
        <div className="row">
          {comparison.length === 0 && (
            <div className="col-12">
              <h3 className="text-center m-5 text-danger">Non hai ancora aggiunto nessun prodotto al comparatore</h3>
            </div>
          )}
          {comparison.map((product) => {
            const fav = isFavorite(product.id);
            return (
              <div className="col-6 " key={product.id}>
                <div className="detail-card row g-3 align-items-start my-5">
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
                        <h3 className="card-title text-danger mt-4 fs-1">
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
                        <i className="fa-solid fa-star fs-3"></i>
                      </button>
                      <button
                        className="add-to-list mb-3"
                        onClick={() => removeFromComparison(product.id)}
                      >
                        <i class="fa-solid fa-xmark fs-3"></i>
                      </button>

                      <p>
                        <span>Marca:</span>
                        {product.brand}
                      </p>
                      <p>
                        <span>Prezzo:</span> {product.price} €
                      </p>
                      <p>{product.wireless}</p>
                      <p>{product.noiseCancelling}</p>
                      <p>
                        <span>batteria:</span> {product.batteryLifeHours} h
                      </p>
                      <p>{product.microphone}</p>
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ComparisonPage;
