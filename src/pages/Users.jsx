import { useState, useEffect } from "react";
import usersData from "../data/users";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Users({ favorites, onToggleFavorite }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    // Load data after 1 second
    useEffect(() => {
        const timer = setTimeout(() => {
            setUsers(usersData);
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const filteredUsers = users.filter((u) =>
        u.name.toLowerCase().includes(search.toLowerCase())
    );

    // Update the page title
    useEffect(() => {
        document.title = `Users (${filteredUsers.length})`;
    }, [filteredUsers.length]);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Users</h1>

            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name..."
                className="border rounded p-2 mb-4 w-full max-w-sm dark:bg-gray-800 dark:border-gray-600"
            />

            {loading ? (
                <Loader />
            ) : filteredUsers.length === 0 ? (
                <ErrorMessage message="No users found." />
            ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredUsers.map((user) => (
                        <UserCard
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            company={user.company}
                            isFavorite={favorites.includes(user.id)}
                            onToggleFavorite={() => onToggleFavorite(user.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Users;