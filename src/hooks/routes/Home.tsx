import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-links">
      <Link className="home-link" to="/hooks/useRef">
        useRef
      </Link>
      <Link className="home-link" to="/hooks/useReducer">
        useReducer
      </Link>
      <Link className="home-link" to="/hooks/useMemo">
        useMemo
      </Link>
      <Link className="home-link" to="/hooks/useCallback">
        useCallback
      </Link>
      <Link className="home-link" to="/hooks/useLayoutEffect">
        useLayoutEffect
      </Link>
      <Link className="home-link" to="/hooks/useId">
        useId
      </Link>
    </div>
  );
}
