import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <nav>
      <h1>Hooks Examples from Intermediate React v5</h1>
      <select
        value={pathname}
        onChange={(e) => {
          navigate(e.target.value);
        }}
      >
        <option value="/hooks/">Home</option>
        <option value="/hooks/useRef">useRef</option>
        <option value="/hooks/useReducer">useReducer</option>
        <option value="/hooks/useMemo">useMemo</option>
        <option value="/hooks/useCallback">useCallback</option>
        <option value="/hooks/useLayoutEffect">useLayoutEffect</option>
        <option value="/hooks/useId">useId</option>
      </select>
    </nav>
  );
}
