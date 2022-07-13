import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([]);
  function addFavorite(favorite) {
    setFavorites((prev) => {
      return prev.concat(favorite);
    });
  }
  function removeFavorite(meetupId) {
    setFavorites((prev) => prev.filter((item) => meetupId !== item.id));
  }
  function itemIsFavorite(meetupId) {
    return favorites.some((meetup) => meetupId === meetup.id);
  }
  const context = {
    favorites,
    totalFavorites: favorites.length,
    addFavorite,
    removeFavorite,
    itemIsFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
