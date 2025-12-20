const FavoritesPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Preferiti</h1>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center detail-card">
            <div className="d-flex align-items-center gap-3">
              <img
                src="/images/beats-solo3.jpg"
                alt="..."
                className="product-thumb"
              />
              <h4 className="mb-0">Nome prodotto</h4>
            </div>
            <div>
              <button className="add-to-list fs-5">dettaglio</button>
              <button className="add-to-list fs-5">rimuovi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
