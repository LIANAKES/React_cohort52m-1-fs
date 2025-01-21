import "./Input.css";

const Input = ({ name, type, placeholder, label, id }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};

export default Input;
