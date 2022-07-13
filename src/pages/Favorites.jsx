import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <section>
      <h1>My Favorites</h1>
      {favoriteCtx.totalFavorites === 0 ? (
        <p>No Favorites</p>
      ) : (
        <MeetupList meetups={favoriteCtx.favorites}></MeetupList>
      )}
    </section>
  );
}

export default FavoritesPage;
