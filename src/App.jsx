import "./App.css";
import Homework02Teacher from "./homeworks/Homework02Teacher/Homework02Teacher";
//импорт по умолчанию (название компонента можно заменить на любое другое)
// import MyButton from "./components/Button/Button";
// import Button from "./components/Button/Button";

//lessons
// import Lesson02 from "./lessons/Lesson02/Lesson02";
//import Lesson03 from "./lessons/Lesson_03/Lesson03";

//homeworks
// import Homework02 from "./homeworks/Homework02/Homework02";

function App() {
  return (
    <div className="app">
      {/* <Button />
      <Button />
      <Button /> */}
      {/* ---Topic: Components */}
      {/* <Lesson02/> */}
      {/* <Homework02/> */}
      {/* ---Topic: Props */}
      {/*<Lesson03 />*/}
      <Homework02Teacher/>
    </div>
  );
}

export default App;