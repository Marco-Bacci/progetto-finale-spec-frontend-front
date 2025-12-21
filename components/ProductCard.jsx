import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../src/context/GlobalContext";
const ProductCard = ({ product }) => {
  const { toggleFavorite, isFavorite } = useContext(GlobalContext);
  const fav = isFavorite(product.id);

  return (
    <Link to={`/products/${product.id}`}>
      <div
        className="card mb-3 p-3 product-card position-relative "
        style={{ maxWidth: "540px" }}
      >
        <div className="card-body">
          <h5 className="card-title text-danger">{product.title}</h5>
          <p className="card-text">{product.category}</p>
        </div>
        <div className="position-absolute top-0 end-0">
          <button
            className={`home-favorite fs-4 ${fav ? "favorite" : ""}`}
            style={fav ? {backgroundColor : "rgb(208, 72, 78)"} : {}}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation(); 
              toggleFavorite(product);
            }}
          >
            {fav ? (
              <i className="fa-solid fa-star"></i>
            ) : (
              <i className="fa-regular fa-star"></i>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
