import React, { useState, useEffect, useRef } from 'react';

import './CSS/ToDo.css'
import ToDoItem from './ToDoItem';

const ToDo = () => {
   const[todos,setTodos] = useState([]);
   const InputRef = useRef(null);

   let count =0;
   const add = () => {
     setTodos([...todos,{no:count++,text: InputRef.current.value,display:''}])
     InputRef.current.value='';
     localStorage.setItem("todos_count",count)
     
   }

   useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // fix here: stringify todos array with parentheses
    count = localStorage.getItem("todos_count");
}, []);
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos)); // save local storage
}, [todos]);
   
  return (
    <div className='ToDo'>
    <div className='ToDo-header'>To-Do List</div>
    <div className="ToDo-add">
    <input ref={InputRef} type="text" placeholder='Add Your Task' className='ToDo-input'></input>
    <div onClick={()=>{add()}} className="ToDo-add-btn">ADD</div>
    </div>
 <div className="ToDo-list"></div>
 {todos.map((item,index)=>{
   return <ToDoItem key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}/>

 })}
    </div>
  )
}
export default ToDo



