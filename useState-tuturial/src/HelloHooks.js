import React, {useState} from "react";


const HelloHooks = () => {
  const titleArr = ["Hello Hooks", "I know about hooks!"]
   const [title,setTitle] =  useState(titleArr[0]);
   const [hide, setHide] = useState(false);

    const handleOnClick = ()=>{
        setTitle(titleArr[1]);
        setHide(true)
    }

  return (
    <div className="box">
        <div className="boxMx">
            <div> <h1>{title}</h1></div>
            <div><button onClick={handleOnClick}>Change title</button></div>
            <div>{hide&&<div><br/><b>Before:</b> {titleArr[0]}<br/><b>After:</b> {titleArr[1]}</div>}</div>
        </div>
    </div>
  );
};

export default HelloHooks;
