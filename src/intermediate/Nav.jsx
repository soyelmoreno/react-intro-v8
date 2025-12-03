import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <nav>
      <h1>Intermediate React v5</h1>
      <select
        value={pathname}
        onChange={(e) => {
          navigate(e.target.value);
        }}
      >
        <option value="/intermediate/">Home</option>
        <option value="/intermediate/useRef">useRef</option>
        <option value="/intermediate/useReducer">useReducer</option>
        <option value="/intermediate/useMemo">useMemo</option>
        <option value="/intermediate/useCallback">useCallback</option>
        <option value="/intermediate/useLayoutEffect">useLayoutEffect</option>
        <option value="/intermediate/useId">useId</option>
      </select>
    </nav>
  );
}
