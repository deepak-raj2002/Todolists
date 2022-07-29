import React, { useState } from 'react';
import Todolists   from './Todolists';
const App=()=>{
  const[inputlist,setinputlist]=useState("");
  const[items,setItems]=useState([]);
const itemevent=(event)=>{
  setinputlist(event.target.value);
};
const listOfItems=()=>{
  setItems((olditems)=>{
   return [...olditems,inputlist]
  });
  setinputlist("");
};
return(
  <>
   <div className="main_div">
   <div className="center_div">
    <br/>
    <h1>ToDo Lists</h1>
    <br/>
    <input type="text" placeholder="Add an item" value={inputlist} onChange={itemevent}/>
    <button onClick={listOfItems}>+</button>
    <ol>
      {
        items.map((itemval)=>{
          return<Todolists text={itemval}/>;
        })
      }
    </ol>
   </div>

   </div>
  </>
);
};
export default App;