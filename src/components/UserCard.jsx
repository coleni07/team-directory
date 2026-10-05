import { Link } from "react-router-dom";
import Button from "./Button";

function UserCard({ id, name, email, company, isFavorite, onToggleFavorite }) {
    return (
        <div className="border rounded-lg p-4 shadow bg-white dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm">{email}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>

            <div className="flex items-center gap-3 mt-3">
                <Link to={`/users/${id}`} className="text-blue-600 dark:text-blue-400 underline">
                    View Details
                </Link>
                <Button
                    label={isFavorite ? "Remove Favorite" : "Add Favorite"}
                    variant={isFavorite ? "danger" : "primary"}
                    onClick={onToggleFavorite}
                />
            </div>
        </div>
    );
}

export default UserCard;