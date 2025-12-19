import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="jumbotron">
        <div className="container jumbotron-content">
          <h1 className="fw-bold">AudioSpecs</h1>
          <p className="lead">
            Confronta le cuffie migliori in base alle specifiche tecniche
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="py-4">Catalogo</h2>
          </div>
          <div className="row">
            {products.map((product) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
