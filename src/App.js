import React from "react";
import {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', text: 'Javascript - язык программирования'},
        {id: 2, title: 'Python', text: 'JPython - язык программирования'},
        {id: 3, title: 'C++', text: 'C++ - язык программирования'}
        ])
    return (
        <div className="App">
            {posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
}

export default App;
