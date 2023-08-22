import { Link } from "react-router-dom";

export const NavButtonLink = ({ to, children }) => (
  <Link
    to={to}
    className="bg-green-600 px-4 py-2 rounded-md transition-all duration-500 ease-in-out hover:bg-transparent hover:text-green-600 hover:border hover:border-green-600"
  >
    {children}
  </Link>
);
