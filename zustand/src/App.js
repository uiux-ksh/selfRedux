import { useState} from 'react';
import useStore from "./store";
import Todo from "./Todo";
import User from "./components/User";
import Banner from "./components/Banner";
import Lol from "./components/Lol";



function App() {

   const {addTodo,todos}= useStore(state => state);
   const [todo,setTodo] =useState('');

  return (
   <div className='app'>
       {/*<input type="text" placeholder={"Write your todo here"}*/}
       {/*onChange={(e) => setTodo(e.target.value)}/>*/}
       {/*<button onClick={() => addTodo(todo)}> add todo</button>*/}
       {/*{todos.map((todo,i) => {*/}
       {/*    return <Todo key={i} text={todo} id={1} />*/}
       {/*})}*/}
       <Banner />
       <main>
           <User/>
           <Lol />
       </main>


   </div>
  );
}

export default App;
