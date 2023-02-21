import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState();

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevFavorites) => {
      return prevFavorites.concat(favoriteMeetup);
    });
  }
  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevFavorites) => {
      return prevFavorites.filter((favorite) => {
        return favorite.id !== meetupId;
      });
    });
  }
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: setUserFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;