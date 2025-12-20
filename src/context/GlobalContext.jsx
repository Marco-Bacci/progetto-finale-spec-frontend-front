import { createContext, useState, useMemo } from "react";

export const GlobalContext = createContext(null);

export function GlobalProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites((prev) => {
      if (prev.some((prod) => prod.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prev) => prev.filter((prod) => prod.id !== productId));
  };

  const isFavorite = (productId) => {
    return favorites.some((p) => p.id === productId);
  };

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const value = useMemo(
    () => ({
      favorites,
      addToFavorites,
      removeFromFavorites,
      toggleFavorite,
      isFavorite,
    }),
    [favorites]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
