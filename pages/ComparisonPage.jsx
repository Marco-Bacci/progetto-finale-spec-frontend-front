import React from "react";

const ComparisonPage = () => {
  return (
    <>
      <h1 className="text-center">compara</h1>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="detail-card row g-3 align-items-start my-5">
              <div className="col-12">
                <div className="product-image ">
                  <img
                    className="img-fluid"
                    src="images/beats-studio3.jpg"
                    alt="..."
                  />
                </div>
                <div className="col-12 general-info">
                  <div className="card-body mb-3">
                    <h3 className="card-title text-danger mt-4 fs-1">nome</h3>
                    <p className="card-text">categoria</p>
                  </div>
                  {/* manca aggiunta bottoni */}
                  <p>
                    <span>Marca:</span> marca
                  </p>
                  <p>
                    <span>Prezzo:</span> 200 €
                  </p>
                  <p>wireless</p>
                  <p>noise cancel</p>
                  <p>
                    <span>batteria:</span> 16 h
                  </p>
                  <p>microfono</p>
                  <p>
                    <span>peso:</span> 200 g
                  </p>
                  <p>
                    <span>Descrizione:</span> descrizione
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparisonPage;
