import { useAuth } from "../contexts/AuthContext";
import { redirectToLogin } from "../helpers/auth";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  try {
    if (user) {
      return <> {children} </>;
    }
    redirectToLogin();
    return null;
  } catch (error) {
    console.error("Error : ", error);
    redirectToLogin();
    return null;
  }
}

export default ProtectedRoute;
