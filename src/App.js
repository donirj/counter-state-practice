import logo from './logo.svg';
import './App.css';
//what is state? built in react object that is used to contain data or information about the component
//hook is a special function that lets you 'hook into' react features
//useState is a hook that lets you add react state to a function components
//when would i use a hook? if you write a funciton component and realize you need to add som state to it, previously you have to convert it to a class
//now you can use a hook insde the existing function component, wer going to do that right now
import React, { useState } from "react"

function App() {
  let [count, setCount] = useState(0)

  const increment = () => {
    console.log('increment')
    setCount(count += 1) 
  }

  const decrecrement = () => {
    console.log('decrement')
    setCount(count -= 1)
  }
  return (
    //state: every time we update a variable, the state gets it
    <div className="App">
      <h1>welcome to counter app</h1>
      <p>the count is: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrecrement}>-</button>
    </div>
  );
}

export default App;
