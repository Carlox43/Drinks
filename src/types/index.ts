import { z } from "zod";
import {
  CategoriesResponseSchema,
  DrinkApiResponse,
  DrinksApiResponse,
  RecipeAPIResponseSchema,
  SearchFilterSchema,
} from "../utils/recipe-schema";

export type categories = z.infer<typeof CategoriesResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Drinks = z.infer<typeof DrinksApiResponse>;
export type Drink = z.infer<typeof DrinkApiResponse>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;
