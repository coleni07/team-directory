function Button({ label, onClick, variant = "primary", children }) {
    const styles =
        variant === "danger"
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white";

    return (
        <button
            onClick={onClick}
            className={`px-3 py-1 rounded font-medium cursor-pointer ${styles}`}
        >
            {children} {label}
        </button>
    );
}

export default Button;