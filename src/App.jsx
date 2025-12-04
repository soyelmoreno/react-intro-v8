import { lazy, Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import Intermediate from "./intermediate/Intermediate";
import Home from "./intermediate/routes/Home";
import UseRef from "./intermediate/routes/UseRef";
import UseCallback from "./intermediate/routes/UseCallback";
import UseMemo from "./intermediate/routes/UseMemo";
import UseReducer from "./intermediate/routes/UseReducer";
import UseLayoutEffect from "./intermediate/routes/UseLayoutEffect";
import UseId from "./intermediate/routes/UseId";

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
                <Link to="/intermediate">Intermediate React v5</Link>
              </nav>
              <Routes>
                <Route path="/intermediate" element={<Intermediate />}>
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
