// import { useRef, useState } from "react";
// import FirstComponent from "./componenets/FirstComponent";

import ToDo from "./componenets/ToDo"

const App = () => {

  // const [data,setData] = useState([]);
  // const inputRef= useRef(null)
  // let x =0; // böyle yazarsam ekranda görüntü değişmez çünkü react
  //state in değişmesi lazım userstateHook kullanılmalı.
// const[x,setx]=useState(0);
// const btnClick = ()  =>{
//  console.log("Clicked")
//  setx(x+1);
//  console.log(x);
  
// }
  // let x= 'DogaDurmaz';
  // let array=['user1','user2','user3','user4']
  // let data='boy';
  // event handling



  return (

    <div>
      {/* <input ref = {inputRef} type="text" />
      {data.map((item,index)=>{return <h2 key={index}>{item}</h2>})};
      <button onClick={()=>{setData([...data,inputRef.current.value])}}>Submit</button> */}
      {/* {x} */}
{/* {x}
{array.map((user)=>{return <h2>{user}</h2>})} */}
{/* {data==='boy'?<h1>boy</h1>:<h1>girl</h1>} */}
{/* <button onClick={()=>{btnClick()}}>Click Me</button>
<FirstComponent data= {x} fn={setx}/> */}


<ToDo/>
    </div>
  )
}
 export default App
// for creating this template we use rafc

// class componenet vs function component class ta daha uzun ve
// http requesti var functionalda bunlar yok sadece ekranda gösterilir.