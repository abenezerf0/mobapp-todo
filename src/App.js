import React,{useState} from 'react';
import './App.css';

function App() {
  const [addedtask, settask] = useState("")
  const [tasks, settasks] = useState([])
  const [edit, setedit] = useState(0)
  const [newtext, setnewtext] = useState("")

  function addtsk(){

    if(!addedtask)
    {
      alert("please write a task first")
      return;
    }
    const item = {
      id: Math.floor(Math.random()*1000),
      value: addedtask
    };

    settasks(ot => [...ot, item]);
    settask("");



  }
  function deletetask(id)
  {
    const taskarr = tasks.filter(item =>  item.id !== id);
    settasks(taskarr);
  }
  function editor(id,value)
  {
    const et = tasks.filter((item) => item.id===id)
    const item = 
    {
      id: Math.floor(Math.random()*1000),
      value: value,
    };
    deletetask(id);
    settasks(ot => [...ot,item]);
 console.log(et);
    
     
  }
  
  return (
    <div className='App'>
    <div  className="container">
      <h1> To-do list app</h1>
      <input className='bg-color-black'
      type="text"
      placeholder="Add a task"
      value={addedtask}
      onChange = {evnt=>settask(evnt.target.value)}

    />
     <button className='Button' onClick= {() => addtsk()} >Add</button>
     <ul>
      {tasks.map(item =>{
        return(
          
          <li key={item.id}>{item.value}<button className='Button' onClick={() => deletetask(item.id)}>❌</button>
          <button onClick ={()=>setedit(item.id)}>🖊️ </button>
           {
          edit===item.id?(
            <div>
              <input
              type="text"
              value={newtext}
              onChange={(ev)=>setnewtext(ev.target.value)}           
              />         
                <button className='Button' onClick ={()=>editor(item.id,newtext)}>update </button>           
               </div>
          ):null}
          </li>

        )
      })}



     </ul>
      
    </div></div>
  );
}

export default App;
