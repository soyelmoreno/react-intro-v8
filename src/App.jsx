import { lazy, Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import Hooks from "./hooks/Hooks";
import Home from "./hooks/routes/Home";
import UseRef from "./hooks/routes/UseRef";
import UseCallback from "./hooks/routes/UseCallback";
import UseMemo from "./hooks/routes/UseMemo";
import UseReducer from "./hooks/routes/UseReducer";
import UseLayoutEffect from "./hooks/routes/UseLayoutEffect";
import UseId from "./hooks/routes/UseId";

// Code-splitting. Only load these modules when the user actually navigates to
// these routes. Use `lazy` to do the import; Vite notices this, and splits them
// out into separate bundles. Use Suspense later on to render a fallback element
// while these bundles are downloading.
const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);

  return (
    <div
      className="m-0 p-0"
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
      }}
    >
      <BrowserRouter>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <QueryClientProvider client={queryClient}>
            <Suspense
              fallback={
                <div className="loading-pane">
                  <h2 className="loader">🐶</h2>
                </div>
              }
            >
              <header className="mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center">
                <Link
                  className="text-6xl text-white hover:text-gray-200"
                  to="/"
                >
                  Adopt Me!
                </Link>
              </header>
              <nav>
                <Link to="/hooks">
                  Hooks Examples from Intermediate React v5
                </Link>
              </nav>
              <Routes>
                <Route path="/hooks" element={<Hooks />}>
                  <Route path="" element={<Home />} />
                  <Route path="useReducer" element={<UseReducer />} />
                  <Route path="useMemo" element={<UseMemo />} />
                  <Route path="useCallback" element={<UseCallback />} />
                  <Route path="useRef" element={<UseRef />} />
                  <Route path="useLayoutEffect" element={<UseLayoutEffect />} />
                  <Route path="useId" element={<UseId />} />
                </Route>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </Suspense>
          </QueryClientProvider>
        </AdoptedPetContext.Provider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
