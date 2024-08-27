import React, {useState} from "react";


const Count = () => {
    const [count, setCount]  = useState(0 );

    const decrimentCount=()=>{  
        setCount(previoseState=>previoseState-1);
        setCount(previoseState=>previoseState-1);

    }

    const incrementCount=()=>{
        setCount(count+1);
    }
  return (
    <div className="box">
        <div className="boxMx">
            <div> <h1>Count</h1></div>
            <div className="counter">
                <button  className="item" onClick={decrimentCount}>-</button>
                <h1 className="item">{count}</h1>
                <button className="item" onClick={incrementCount}>+</button>
            </div>
        </div>
    </div>
  );
};

export default Count;