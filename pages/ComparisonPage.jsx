const ComparisonPage = ({ comparison }) => {
  return (
    <>
      <h1 className="text-center">Compara</h1>
      <div className="container">
        <div className="row">
          {comparison.map((product) => {
            return (
              <div className="col-6">
                <div className="detail-card row g-3 align-items-start my-5">
                  <div className="col-12">
                    <div className="product-image ">
                      <img
                        className="img-fluid"
                        src={product.imageUrl}
                        alt={product.title}
                      />
                    </div>
                    <div className="col-12 general-info">
                      <div className="card-body mb-3">
                        <h3 className="card-title text-danger mt-4 fs-1">
                          nome
                        </h3>
                        <p className="card-text">{product.category}</p>
                      </div>
                      {/* manca aggiunta bottoni */}
                      <p>
                        <span>Marca:</span>
                        {product.brand}
                      </p>
                      <p>
                        <span>Prezzo:</span> {product.price} €
                      </p>
                      <p>{product.wireless}</p>
                      <p>{product.noiseCancelling}</p>
                      <p>
                        <span>batteria:</span> {product.batteryLifeHours} h
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ComparisonPage;
