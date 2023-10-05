import Counter from "./components/Counter";
import React, { useState} from 'react';
import Multiplier from "./components/Multiplier";
import Subtraction from "./components/Subtraction";
import Divider from "./components/Divider";
import './App.css';
const App = () => {
  const [value,setValue] = useState()
  return (
    <div className="App">
      <Multiplier value={value}></Multiplier>
      <Subtraction value={value}></Subtraction>
      <Divider value={value}></Divider>
     <Counter setValue={setValue}> </Counter>
      </div>
  );
}

export default App;
