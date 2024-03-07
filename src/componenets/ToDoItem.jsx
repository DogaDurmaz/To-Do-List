import './CSS/ToDoItem.css'
import tick from './Assets/tick.png';
import not_tick from './Assets/not_tick.png';
import cross from './Assets/cross.png';

 const ToDoItem = ({no,display,text,setTodos}) => {
  const deleteToDo= (no)=> {
    let data = JSON.parse(localStorage.getItem("todos"));
data= data.filter((todo)=>todo.no!== no );
setTodos(data);
  }
  // const toggle = (no)=>{
  //   let data = JSON.parse(localStorage.getItem("todos"));
  //   for(let i =0 ; i<data.length;i++) {
  //     if(data[i.no===no]) {
  //       if(data[i].display===""){
  //             data[i].display = "line-through";
  //       }
  //       else{
  //         data[i].display = "";

  //       }
  //       break;
  //     }

  //   }
  //   setTodos(data);
  // }

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
        if (data[i].no === no) { // Corrected the condition here
            if (data[i].display === "") {
                data[i].display = "line-through";
            } else {
                data[i].display = "";
            }
            break;
        }
    }
    setTodos(data);
}
  return (

    <div className='ToDoItems'>
      <div className={`ToDoItemsContainer ${display}`} onClick={()=>{toggle(no)}}>
      {display===''?<img src={not_tick} alt="" />:<img src={tick} alt="" />}
      
      <div className="toDoItems-text">{text}</div>
    </div>
    <img  className ='ToDoItem-cross-ıcon ' onClick={()=>{deleteToDo(no)}} src={cross} alt="" />

    </div>
  )
}
export default ToDoItem