import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import usersData from "../data/users";
import ErrorMessage from "../components/ErrorMessage";

function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(undefined); // undefined = not checked yet

    useEffect(() => {
        const found = usersData.find((u) => u.id === Number(id));
        setUser(found || null);
    }, [id]);

    useEffect(() => {
        if (user) document.title = user.name;
    }, [user]);

    if (user === undefined) return null;

    return (
        <div>
            <Link to="/users" className="text-blue-600 dark:text-blue-400 underline">
                ← Back
            </Link>

            {user === null ? (
                <ErrorMessage message="User not found." />
            ) : (
                <div className="mt-4">
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                    <p>Email: {user.email}</p>
                    <p>Company: {user.company}</p>
                    <p>Role: {user.role}</p>
                </div>
            )}
        </div>
    );
}

export default UserDetails;