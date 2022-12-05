import { Navigate } from "react-router-dom";

import { useAuthContext } from "@tps/admin/hooks/auth/useAuthContext";

type AuthRouteProps = {
  children: JSX.Element;
};

export function AuthRoute({ children }: AuthRouteProps) {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? <Navigate to="/" /> : children;
}
