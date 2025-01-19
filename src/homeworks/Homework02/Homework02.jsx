import ProfileCard from "../../components/ProfileCard/ProfileCard";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import "./Homework02.css";

function Homework02() {
  return (
    <div className="homework02">
      <ProfileCard
        avatar={avatar1}
        name="John Luis"
        occupation="Software Engineer"
        hobby="Hiking"
      />
      <ProfileCard
        avatar={avatar2}
        name="Amanda Smith"
        occupation="Graphic Designer"
        hobby="Photography"
      />
      <ProfileCard
        avatar={avatar3}
        name="Alice Weber"
        occupation="Product Manager"
        hobby="Traveling"
      />
    </div>
  );
}

export default Homework02;
