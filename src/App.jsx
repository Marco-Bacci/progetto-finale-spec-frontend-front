import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import FavoritesPage from "../pages/FavoritesPage";
import ComparisonPage from "../pages/ComparisonPage";
import NotFoundPage from "../pages/NotFoundPage";
import Header from "../components/Header";
import { useState, useEffect } from "react";

function App() {
  const [comparison, setComparison] = useState(() => {
    const stored = localStorage.getItem("comparison");
    return stored ? JSON.parse(stored) : [];
  });

   useEffect(() => {
    localStorage.setItem("comparison", JSON.stringify(comparison));
  }, [comparison]);

  // -----------------------------------------------------

  const addToComparison = (product) => {
    setComparison((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;
      
      if (prev.length >= 4) {
        return prev;
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
                removeFromComparison={removeFromComparison}
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
