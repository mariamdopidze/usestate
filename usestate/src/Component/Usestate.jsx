import React, {usestate} from "react";
import './usestate.css';


function Button() {
  
  const [count, setcount] = usestate(0);

    const increment =()=> {
        setcount(count +1);
    };

    const decrement =()=> {
        setcount(count -1);
    };


return (
    <div>
    <button className="click">I was clicked {count} time</button>   
    <button onClick={increment}>  + </button>
    <button onClick={decrement}> - </button>
    </div>
    ) ;
    
}

export default Button;