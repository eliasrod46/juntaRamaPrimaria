import { Link } from "react-router-dom";

export const LogButtonLink = ({ to, children, onClick }) => (
  <div className="transition-all duration-500 ease-in-out hover:scale-125">
    <Link
      to={to}
      onClick={onClick}
      className="px-4 py-2 transition-all duration-500 ease-in-out hover:text-green-600"
    >
      {children}
    </Link>
  </div>
);
