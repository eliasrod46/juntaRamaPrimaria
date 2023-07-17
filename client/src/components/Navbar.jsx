import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  // console.log(isAuthenticated, user)

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-xl font-bold">
        <Link to={isAuthenticated ? "/home" : "/"}>Junta Rama Primaria</Link>
      </h1>
      <div>
      {isAuthenticated ? (
          <>
          <span>
              Welcome {user.username}
          </span>
          </>
        ) : (
          <>
            <span>
                No User Logged
            </span>
          </>
        )}
      </div>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>

            <li>
              <ButtonLink to="/add-docente">Agregar Docente</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/docentes">Docentes</ButtonLink>
            </li>
            <li>
              <Link to="/" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/login">Login</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Register</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}