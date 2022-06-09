import React, {useRef} from "react";
import {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', text: 'Javascript - язык программирования'},
        {id: 2, title: 'Python', text: 'JPython - язык программирования'},
        {id: 3, title: 'C++', text: 'C++ - язык программирования'}
        ])
    const [title, setTitle] = useState('')
    const bodyInputRef = useRef()
    const addNewPost = (e) => {
        e.preventDefault()
        console.log(bodyInputRef.current.value)
        console.log(title)
    }
    return (
        <div className="App">
            <form >
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='Название поста'
                />
                <MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder='Описание поста'/>
                <MyButton type='submit' onClick={addNewPost}>Создать</MyButton>
            </form>
            <PostList posts={posts} title={'Список постов 1'}/>

        </div>
    );
}

export default App;
