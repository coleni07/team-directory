import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
            <Link to="/" className="text-blue-600 dark:text-blue-400 underline">Go Home</Link>
        </div>
    );
}
export default NotFound;