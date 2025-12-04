import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./SearchParams";
import Details from "./Details";
import AdoptedPetContext from "./AdoptedPetContext";
import Intermediate from "./intermediate/Intermediate";
import Home from "./intermediate/routes/Home";
import UseRef from "./intermediate/routes/UseRef";
import UseCallback from "./intermediate/routes/UseCallback";
import UseMemo from "./intermediate/routes/UseMemo";
import UseReducer from "./intermediate/routes/UseReducer";
import UseLayoutEffect from "./intermediate/routes/UseLayoutEffect";
import UseId from "./intermediate/routes/UseId";

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
      className="p-0 m-0"
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
      }}
    >
      <BrowserRouter>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <QueryClientProvider client={queryClient}>
            <header>
              <Link className="logo" to="/">
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
          </QueryClientProvider>
        </AdoptedPetContext.Provider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
