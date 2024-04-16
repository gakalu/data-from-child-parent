
import { useState } from "react";
function ChildComponent({onData}){

    const[textInput,setTextInput]=useState(null);

    const eventHandler=(event)=>{
    const Input=event.target.value;
    setTextInput(Input);
    }
    const sendDataToParent=()=>{
        onData(textInput);
    }
    return(
        <div>
          <h1>This is chiledComponent</h1>
          <input onChange={eventHandler} className="ms-2" />
          <p>{textInput}</p>
          <button className='btn bg-primary border-2 m-2' onClick={sendDataToParent}>Send dtata to Parent</button>
        </div>
    )
}
export default ChildComponent;