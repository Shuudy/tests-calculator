import Ripple from "material-ripple-effects";

function Button({ label, className, onClick }) {
    const ripple = new Ripple();

    return (
        <button
            className={`cursor-pointer bg-gray-200 hover:bg-gray-300 rounded p-2 ${className}`}
            onClick={(e) => {
                ripple.create(e, "dark");
                onClick();
            }}
        >
            {label}
        </button>
    );
}

export default Button;
