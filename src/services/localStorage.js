const NAME = "favourites";

export const getFavourites = () => {
  return JSON.parse(localStorage.getItem(NAME) || "[]");
};

export const addFavourite = (film) => {
  const fav = getFavourites();
  fav.unshift(film);
  localStorage.setItem(NAME, JSON.stringify(fav));
};

export const deleteFavourite = (id) => {
  const fav = getFavourites().filter((i) => i.id !== id);
  localStorage.setItem(NAME, JSON.stringify(fav));
};

export const inFavourites = (id) => {
  return !!getFavourites().find((i) => i.id === id);
};
