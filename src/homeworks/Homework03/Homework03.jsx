import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./Homework03.css";

const Homework03 = () => {
  return (
    <div className="homework03-container">
      <Input
        id="username-input"
        name="username"
        type="text"
        placeholder="Enter your username"
        label="Username"
      />
      <Button name="Submit" />
    </div>
  );
};

export default Homework03;
