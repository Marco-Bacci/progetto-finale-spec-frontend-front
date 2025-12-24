import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import FavoritesPage from "../pages/FavoritesPage";
import ComparisonPage from "../pages/ComparisonPage";
import NotFoundPage from "../pages/NotFoundPage";
import Header from "../components/Header";
import { useState } from "react";

function App() {
  const [comparison, setComparison] = useState([]);
  const addToComparison = (product) => {
    setComparison((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;

      if (prev.length === 2) {
        return [prev[1], product];
      }
      return [...prev, product];
    });
  };
  const removeFromComparison = (id) => {
    setComparison((prev) => prev.filter((p) => p.id !== id));
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/:id"
            element={
              <DetailPage
                addToComparison={addToComparison}
                comparison={comparison}
              />
            }
          />
          <Route
            path="/comparison"
            element={
              <ComparisonPage
                comparison={comparison}
                removeFromComparison={removeFromComparison}
              />
            }
          />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
