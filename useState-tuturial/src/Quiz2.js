import React , {useState} from "react";

const  Quiz2=()=>{
    const [count, setCount]  = useState(0 );

    const decrimentCount=()=>{  
    }

    const incrementCount=()=>{
    }
        return (
            <div className="box">
                <div className="boxMx">
                    <div> <h1>Count</h1></div>
                    <div>
                        <button  onClick={decrimentCount}>-</button>
                        <h1>{count}</h1>
                        <button onClick={incrementCount}>+</button>
                    </div>
                </div>
            </div>
        );
  };
  
  export default Quiz2;