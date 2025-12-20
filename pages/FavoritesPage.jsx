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
                className="product-thumb d-none d-sm-inline ms-1 "
              />
              <h4 className="mb-0">Nome prodotto  </h4>
            </div>
            <div className="d-flex gap-1">
              <button className="add-to-list fs-5"><i class="fa-solid fa-info"></i></button>
              <button className="add-to-list fs-5"><i class="fa-solid fa-xmark"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
