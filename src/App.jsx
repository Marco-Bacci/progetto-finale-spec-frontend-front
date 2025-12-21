import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import FavoritesPage from "../pages/FavoritesPage";
import ComparisonPage from "../pages/ComparisonPage";
import Header from "../components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<DetailPage />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
