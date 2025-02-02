import Button from "../Button/Button";
import "./Feedback.css";
import { useState } from "react";

function Feedback() {
  // Инициализация состояния для лайков и дизлайков
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // Функции для изменения состояния
  const onLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const onDislikeClick = () => {
    setDislikes((prevDislikes) => prevDislikes + 1);
  };

  const onResetClick = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="button-wrapper">
        <Button name="Like" type="button" onClick={onLikeClick} />
        <span className="counter">{likes}</span>
      </div>
      <div className="button-wrapper">
        <Button name="Dislike" type="button" onClick={onDislikeClick} />
        <span className="counter">{dislikes}</span>
      </div>
      <div className="reset-wrapper">
        <Button name="Reset Results" type="button" onClick={onResetClick} />
      </div>
    </div>
  );
}

export default Feedback;