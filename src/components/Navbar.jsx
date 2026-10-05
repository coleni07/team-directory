import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar({ favoritesCount, darkMode, onToggleDark }) {
    const linkClass = ({ isActive }) =>
        isActive ? "font-bold underline" : "hover:underline";

    return (
        <nav className="flex items-center gap-6 p-4 bg-gray-200 dark:bg-gray-800">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/users" className={linkClass}>Users</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>

            <span className="ml-auto">Favorites: {favoritesCount}</span>
            <Button
                label={darkMode ? "Light Mode" : "Dark Mode"}
                onClick={onToggleDark}
            />
        </nav>
    );
}

export default Navbar;