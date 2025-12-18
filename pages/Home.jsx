import { useState, useEffect } from "react";

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
              <div className="card mb-3 p-3 product-card" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src="./images/beats-studio3.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title text-danger">Card title</h5>
                      <p className="card-text">
                       card category
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          500 € 
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
