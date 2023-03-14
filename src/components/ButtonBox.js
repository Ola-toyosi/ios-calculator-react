import "./ButtonBox.css";

//  Contains all calculator buttons
const ButtonBox = ({ children }) => {
    return <div className="buttonBox">{ children }</div>
};

export default ButtonBox;