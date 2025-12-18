import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
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
            <h2>I nostri prodotti</h2>
          </div>
          <div className="row">
            <div className="col-4">
              <ProductCard/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
