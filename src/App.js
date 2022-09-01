import './App.css';
import {state} from 'react'
import { useState } from 'react';
function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setToDo]=useState('')
  const deleteTodo=()=>{
    const test=[...toDos]
  }
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setTodos([...toDos,{id:Date.now(), text:toDo,status:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
    <h1>All Tasks</h1>
      {
        toDos.map((obj)=>{
          return(

      
        <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
          console.log(e.target.checked)
          console.log(obj)
         setTodos(toDos.filter(obj2=>{
          if(obj2.id===obj.id){
            obj2.status=e.target.checked
          }
          return obj2
         })) 
          }} value={obj.status} type="checkbox" name="" id="" />
          <p>{obj.text}</p>
        </div>
        <div className="right">
          {/* <i onClick={()=>{deleteTodo([])}} className="fas fa-times"></i> */}
        </div>
      </div>)})}

      <div className='Tasks-Done'>
        <h1>Tasks Done</h1>
      
      {toDos.map((obj)=>{
        if(obj.status){
          return (
                <div className="tado2">
            <h2>{obj.text}</h2>
            </div> 
            )
          }
          return null
          
          
        })}
   
        </div>
    </div>
  </div>
  );
}

export default App;
