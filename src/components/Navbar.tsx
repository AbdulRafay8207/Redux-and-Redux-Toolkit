// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/recipes">Recipe Book</Link>
      </div>
      <div className="space-x-4">
        <Link to="/recipes" className="hover:bg-blue-500 px-3 py-1 rounded transition">
          All Recipes
        </Link>
        <Link to="/add" className="hover:bg-blue-500 px-3 py-1 rounded transition">
          Add Recipe
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
