import React from "react";
import {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {
    const [value, setValue] = useState('Text in input')
  return (
    <div className="App">
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
    </div>
  );
}

export default App;
