import { useLocation } from "react-router-dom";

export default function useQueryParams() {
  const { search } = useLocation();

  return new URLSearchParams(search);
}
