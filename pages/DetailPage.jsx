import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../src/context/GlobalContext";

const DetailPage = () => {
  const { toggleFavorite, isFavorite } = useContext(GlobalContext);
  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((res) => setProduct(res.data.product))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <div className="container py-5">Caricamento…</div>;

  const fav = isFavorite(product.id);

  const productId = Number(id);

  const goPrev = () => {
    if (productId > 1) {
      navigate(`/products/${productId - 1}`);
    }
  };

  const goNext = () => {
    navigate(`/products/${productId + 1}`);
  };

  return (
    <>
      <h1 className="text-center">Dettaglio del prodotto</h1>
      <div className="container">
          <div className="detail-card  row g-3 align-items-start py-5 my-5">
            <div className="col-12 col-md-5">
              <div className="product-image">
                <img
                  className="img-fluid"
                  src={product.imageUrl}
                  alt={product.title}
                />
              </div>
            </div>
            <div className="col-12 col-md-7 general-info">
              <div className="card-body mb-3">
                <h3 className="card-title text-danger">{product.title}</h3>
                <p className="card-text">{product.category}</p>
                <button
                  className={`add-to-list ${fav ? "favorite" : ""}`}
                  onClick={() => {
                    toggleFavorite(product);
                  }}
                >
                  <i className="fa-solid fa-star fs-3"></i>
                </button>

                <button className="add-to-list">
                  <i className="fa-solid fa-code-compare fs-3"></i>
                </button>
              </div>
              <p>
                <span>Marca:</span> {product.brand}
              </p>
              <p>
                <span>Prezzo:</span> {product.price}€
              </p>
              <p>{product.wireless}</p>
              <p>{product.noiseCancelling}</p>
              <p>
                <span>batteria:</span> {product.batteryLifeHours}h
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
      
      <div className="d-flex justify-content-center gap-5 my-4">
        <button
          className="add-to-list fs-3"
          onClick={goPrev}
          disabled={productId === 1}
        >
          ⬅ Precedente
        </button>

        <button className="add-to-list fs-3" onClick={goNext}>
          Successivo ➡
        </button>
      </div>
    </>
  );
};

export default DetailPage;
