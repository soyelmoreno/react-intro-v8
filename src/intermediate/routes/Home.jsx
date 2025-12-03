import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-links">
      <Link className="home-link" to="/intermediate/useRef">
        useRef
      </Link>
      <Link className="home-link" to="/intermediate/useReducer">
        useReducer
      </Link>
      <Link className="home-link" to="/intermediate/useMemo">
        useMemo
      </Link>
      <Link className="home-link" to="/intermediate/useCallback">
        useCallback
      </Link>
      <Link className="home-link" to="/intermediate/useLayoutEffect">
        useLayoutEffect
      </Link>
      <Link className="home-link" to="/intermediate/useId">
        useId
      </Link>
    </div>
  );
}
