
import { useState } from "react";
import ChildComponent from "./data";
function App(){

  const[parentValue,setParetnValue]=useState(null);

  const parentCall=(data)=>{
   setParetnValue(data);
  }
return(

  <div>
   <ChildComponent onData={parentCall}/>
   {parentValue && <h1>Data from Child: {parentValue}</h1>}
  </div>
)
}
export default App;