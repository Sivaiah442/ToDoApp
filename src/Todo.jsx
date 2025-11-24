import { useState } from "react"

export default function TodoApp(){
    const[tasks,setTasks]=useState([]);
    const[text,setText]=useState("");


function addTask(){
   if(text)
{
    setTasks([...tasks,text])
    setText("");
}  

    
}
function deleteTask(i){
    setTasks(tasks.filter((_,idx)=>idx!=i));
}
return(
   <div className="container">
    <h3>To-Do List</h3>
    <input className="input"  value={text} onChange={e=>setText(e.target.value)}
    placeholder="New Task"/>
    <button  className="add"  onClick={addTask}>ADD</button>
    <ul>
        {tasks.map((t,i)=>
        <li key={i}>
          {t}
           <button className="del" onClick={()=>deleteTask(i)}>x</button>
        </li>
        )}
    
    </ul>
   </div>
);
}