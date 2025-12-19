import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((res) => setProduct(res.data.product))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <div className="container py-5">Caricamento…</div>;

  return (
    <div className="container">
      <h1 className="text-center">Dettaglio del prodotto</h1>

      <div className="row py-5">
        <div className="detail-card row g-3 align-items-start">
          <div className="col-12 col-md-5">
            <img
              className="img-fluid"
              src={product.imageUrl}
              alt={product.title}
            />
          </div>

          <div className="col-12 col-md-7">
            <div className="card-body">
              <h5 className="card-title text-danger">{product.title}</h5>
              <p className="card-text">{product.category}</p>
            </div>
            <p>Marca: {product.brand}</p>
            <p>Prezzo: {product.price}€</p>
            <p>{product.wireless}</p>
            <p>{product.noiseCancelling}</p>
            <p>batteria: {product.batteryLifeHours}h</p>
            <p>{product.microphone}</p>
            <p>peso: {product.weightGrams} g</p>
            <p>Descrizione: {product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
