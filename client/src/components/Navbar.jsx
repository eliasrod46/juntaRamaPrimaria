import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { NavButtonLink, LogButtonLink } from "./ui/index";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  // console.log(isAuthenticated, user)

  return (
    <nav className="flex justify-around lg:justify-between bg-zinc-700 my-3 py-5 px-10 rounded-lg">
      {/* logo */}
      <h1 className="hidden lg:block text-xl font-bold">
        <Link to={isAuthenticated ? "/home" : "/"}>Junta Rama Primaria</Link>
      </h1>
      {/* hi! */}
      <div>
        {isAuthenticated ? (
          <>
            <span>Welcome {user.username}</span>
          </>
        ) : (
          <>
            <span>No User Logged</span>
          </>
        )}
      </div>
      {/* navItems */}
      <div>
        <ul className="flex gap-x-2">
          {isAuthenticated ? (
            <>
              <li>
                <NavButtonLink to="/concepts">Conceptos</NavButtonLink>
              </li>
              <li>
                <NavButtonLink to="/docentes">Docentes</NavButtonLink>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
      {/* logItems */}
      <div>
        <ul className="flex gap-x-2">
          {isAuthenticated ? (
            <>
              <li>
                <LogButtonLink to="/" onClick={() => logout()}>
                  Logout
                </LogButtonLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <LogButtonLink to="/login">Login</LogButtonLink>
              </li>
              <li>
                <LogButtonLink to="/register">Register</LogButtonLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
