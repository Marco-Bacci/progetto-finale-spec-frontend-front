import { Link } from "react-router-dom";
import { useContext, memo } from "react";
import { GlobalContext } from "../src/context/GlobalContext";
const ProductCard = memo(({ product }) => {
  console.log("render ProductCard:", product.id);
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
            className="home-favorite fs-4"
            style={fav ? { backgroundColor: "rgb(208, 72, 78)" } : {}}
            type="button"
            onClick={(e) => {
              e.preventDefault();
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
});

export default ProductCard;
