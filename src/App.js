import React from "react";
import {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', text: 'Javascript - язык программирования'},
        {id: 2, title: 'Python', text: 'JPython - язык программирования'},
        {id: 3, title: 'C++', text: 'C++ - язык программирования'}
        ])
    const [posts2, setPosts2] = useState([
        {id: 1, title: 'Javascript 2', text: 'Javascript - язык программирования'},
        {id: 2, title: 'Python 2', text: 'JPython - язык программирования'},
        {id: 3, title: 'C++ 2', text: 'C++ - язык программирования'}
    ])
    return (
        <div className="App">
            <PostList posts={posts} title={'Список постов 1'}/>
            <PostList posts={posts} title={'Список постов 2'}/>
        </div>
    );
}

export default App;
