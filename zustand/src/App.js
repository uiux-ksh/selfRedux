import './App.css';
import {useRef, useState} from 'react';
import useStore from "./store";
import Todo from "./Todo";



function App() {

   const {addTodo,todos}= useStore(state => state);
   const [todo,setTodo] =useState('');

  return (
   <div style={{
       padding:"100px 200px",
   }}>
       <input type="text" placeholder={"Write your todo here"}
       onChange={(e) => setTodo(e.target.value)}/>
       <button onClick={() => addTodo(todo)}> add todo</button>
       {todos.map((todo,i) => {
           return <Todo key={i} text={todo} id={1} />
       })}
   </div>
  );
}

export default App;
