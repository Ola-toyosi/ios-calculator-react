import "./Buttons.css";

// Buttons
const Button = ({ className, value, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
};

export default Button;