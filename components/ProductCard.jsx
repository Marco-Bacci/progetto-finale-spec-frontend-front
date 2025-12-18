const ProductCard = ({ product }) => {
  return (
    <div className="card mb-3 p-3 product-card" style={{ maxWidth: "540px" }}>
      <div className="card-body">
        <h5 className="card-title text-danger">{product.title}</h5>
        <p className="card-text">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
