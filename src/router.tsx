import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

const IndexPage = lazy(() => import("./pages/IndexPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage"));
const GenerateAI = lazy(() => import("./pages/GenerateAi"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback="Cargando...">
                {" "}
                <IndexPage />{" "}
              </Suspense>
            }
            index
          />
          <Route
            path="/favorite"
            element={
              <Suspense fallback="Cargando...">
                {" "}
                <FavoritePage />{" "}
              </Suspense>
            }
          />
          <Route
            path="/generate"
            element={
              <Suspense fallback="Cargando...">
                {" "}
                <GenerateAI />{" "}
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
