import React from "react";
import {useState} from "react";
import Counter from "./components/Counter";

function App() {
    const [likes, setLikes] = useState(0)
    const [value, setValue] = useState('Text in input')
  return (
    <div className="App">

        <h2>{value}</h2>
        <input
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
        />
        <Counter/>
    </div>
  );
}

export default App;
