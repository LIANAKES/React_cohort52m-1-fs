import "./App.css";


// импорт по умолчанию (название компонента можно заменить на любое другое)
// import MyButton from "./components/Button/Button";
// import Button from "./components/Button/Button";

//lessons
// import Lesson02 from "./lessons/Lesson02/Lesson02";
// import Lesson03 from "./lessons/Lesson_03/Lesson03";
// import Lesson04 from "./lessons/Lesson_04/Lesson04";

//homeworks
// import Homework02 from "./homeworks/Homework02/Homework02";
// import Homework02Teacher from "./homeworks/Homework02Teacher/Homework02Teacher";
// import Homework03 from "./homeworks/Homework03/Homework03";
import Homework05 from "./homeworks/Homework05/Homework05"

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
      {/*<Homework02Teacher/>*/}
     {/* ---Topic: functions, hook(useState) */}
      {/*<Lesson04 />*/}
      {/*<Homework04 />*/}
      <Homework05 />
    </div>
  );
}

export default App;
