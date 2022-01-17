import { useState } from "react";
import CurrentDate from "./components/CurrentDate";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleOnClick = () => {
    setCounter(counter + 1);
  };

  const handleOnClickMinuts = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="red">
      <div>Hello World {counter}</div>
      <CurrentDate prefix= "This is your time" />
      <button onClick={handleOnClickMinuts}>-1</button>
      <button onClick={handleOnClick}>+1</button>
    </div>
  )
};

export default App;
