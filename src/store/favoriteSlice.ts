import { type StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createRecipeSlice, type RecipeSliceType } from "./recipeSlice";
import {
  createNotificationSlice,
  type NotificationSliceType,
} from "./notificationSlice";

export type FavoriteSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoriteExists: (id: string) => boolean;
  loadFromLocalStorage: () => void;
};
export const createFavoriteSlice: StateCreator<
  FavoriteSliceType & RecipeSliceType & NotificationSliceType,
  [],
  [],
  FavoriteSliceType
> = (set, get, api) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (get().favoriteExists(recipe.idDrink)) {
      set((state) => ({
        favorites: state.favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink
        ),
      }));
      createNotificationSlice(set, get, api).showNotification({
        text: "Eliminado de favortios",
        error: false,
      });
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
      createNotificationSlice(set, get, api).showNotification({
        text: "Se agrego a favortios",
        error: false,
      });
    }
    createRecipeSlice(set, get, api).closeModal();
    localStorage.setItem("favirites", JSON.stringify(get().favorites));
  },
  favoriteExists: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },
  loadFromLocalStorage: () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      set({ favorites: JSON.parse(storedFavorites) });
    }
  },
});
