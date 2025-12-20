import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [alphabeticOrder, setAlphabeticOrder] = useState("");

  // filtro di ricerca nome
  const filteredProducts = useMemo(() => {
    console.log("render")
    return products
      .filter((product) => {
        const productName = product.title
          .toLowerCase()
          .includes(search.toLowerCase());
        const productCategory =
          category === "all" || product.category === category;

        // ordine alfabetico

        return productName && productCategory;
      })
      .sort((a, b) => {
        if (alphabeticOrder === "az") {
          return a.title.localeCompare(b.title);
        }
        if (alphabeticOrder === "za") {
          return b.title.localeCompare(a.title);
        }
        return 0; 
      });
  }, [products, search, category, alphabeticOrder]);

  // filtro ricerca categoria

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
        <div className="container jumbotron-content text">
          <h1 className="fw-bold">AudioSpecs</h1>
          <p className="lead">
            Confronta le cuffie migliori in base alle specifiche tecniche
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* ricerca per nome */}
          <div className="col-12 col-md-6 my-3">
            <input
              type="text"
              placeholder="Cerca..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* ricerca per categoria */}
          <div className="col-12 col-md-3 my-3">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">Tutte le categorie</option>
              <option value="In-ear">In-ear</option>
              <option value="Over-ear">Over-ear</option>
              <option value="Gaming">Gaming</option>
            </select>
          </div>
          {/*ricerca per ordine alfabetico  */}
          <div className="col-12 col-md-3 my-3">
            <select
              value={alphabeticOrder}
              onChange={(e) => setAlphabeticOrder(e.target.value)}
            >
              <option value="">Ordina per titolo</option>
              <option value="az">Dalla A alla Z</option>
              <option value="za">Dalla Z alla A</option>
            </select>
          </div>

          <div className="row">
            {filteredProducts.map((product) => {
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
