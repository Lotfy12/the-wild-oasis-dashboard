import { UseLogin } from "../features/authentication/UseLogin";
import Login from "../pages/Login";
import AppLayout from "./AppLayout";

function ProtectedRoute() {
  const { login } = UseLogin();

  if (login) return <AppLayout />;
  else return <Login />;
}

export default ProtectedRoute;
