import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="card mb-3 p-3 detail-card" style={{ maxWidth: "540px" }}>
        <div className="card-body">
          <h5 className="card-title text-danger">{product.title}</h5>
          <p className="card-text">{product.category}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
