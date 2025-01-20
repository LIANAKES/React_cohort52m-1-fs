import "./ProfileCard.css";

function ProfileCard({ avatar, name, occupation, hobby }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={`${name}'s avatar`} className="profile-avatar" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-occupation">Occupation: {occupation}</p>
      <p className="profile-hobby">Hobby: {hobby}</p>
    </div>
  );
}

export default ProfileCard;
