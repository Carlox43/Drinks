import { create } from "zustand";
import { createRecipeSlice, type RecipeSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { type FavoriteSliceType, createFavoriteSlice } from "./favoriteSlice";
import {
  type NotificationSliceType,
  createNotificationSlice,
} from "./notificationSlice";
import { createAISlice, type AISlice } from "./aiSlice";

export const useAppStore = create<
  RecipeSliceType & FavoriteSliceType & NotificationSliceType & AISlice
>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a),
  }))
);
