import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
    const [favorites, setFavorites] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
        );
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                <Navbar
                    favoritesCount={favorites.length}
                    darkMode={darkMode}
                    onToggleDark={() => setDarkMode(!darkMode)}
                />
                <main className="p-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/users"
                            element={<Users favorites={favorites} onToggleFavorite={toggleFavorite} />}
                        />
                        <Route path="/users/:id" element={<UserDetails />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;