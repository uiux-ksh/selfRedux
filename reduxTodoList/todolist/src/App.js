import './App.css';
import {useState} from "react";
import {useSelector ,useDispatch} from "react-redux";
import {addUser,deleteUser,updateUserName} from "./features/Users";

function App() {
    const dispatch =useDispatch();
    const userList =useSelector((state) => state.users.value )
    console.log(userList);
    const [name,setName] =useState("");
    const [username,setUserName] =useState("");
    const [newUsername,setNewUsername]=useState("");
  return (
    <div className="App">
     <div className="addUser">
       <input type="text" placeholder="Name..."  onChange={(e) => setName(e.target.value)}/>
       <input type="text" placeholder="UserName..."  onChange={(e) => setUserName(e.target.value)}/>
       <button onClick={() => {dispatch(addUser({id:userList[userList.length -1 ].id + 1, name:name, username:username}))}}> 추가하기</button>
     </div>
      <div className="displayUser">
          {userList.map((user) => {
              return (
                  <div key={ user.id}>
                     <h1>{user.name}</h1>
                      <h2>{user.username}</h2>
                      <input type="text" placeholder={`${user.name} 유저입니다.`} onChange={(e) => setNewUsername(e.target.value)}/>
                      <button onClick={() => {dispatch(updateUserName({id: user.id,username:newUsername   }))}}> 수정하기</button>
                      <button onClick={() => {dispatch(deleteUser({id:user.id}))}}> 삭제하기</button>
                  </div>
              )
          })}
      </div>
    </div>
  );
}

export default App;
