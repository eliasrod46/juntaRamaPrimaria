import { Link } from "react-router-dom";

export const NavButtonLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-sm md:text-lg text-white font-normal bg-green-600 px-2 py-1 rounded-md transition-all duration-500 ease-in-out hover:bg-transparent hover:text-green-600 border border-zinc-700 hover:border-green-600"
  >
    {children}
  </Link>
);
