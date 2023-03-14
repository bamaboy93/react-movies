import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

export default function PrivateRoute({ component, redirectTo }) {
  const [user] = useAuthState(auth);

  return !user ? <Navigate to={redirectTo} /> : component;
}
