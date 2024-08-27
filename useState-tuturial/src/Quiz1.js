const  Quiz1=()=>{
    let title="Set up useState"

    const handleOnClick=()=>{
       title = "the useState was set up successfully"
    }
    return (
      <div className="box">
         <div className="boxMx">
            <div> <h1>{title}</h1></div>
            <div><button onClick={handleOnClick}>Change title</button></div>
        </div>
      </div>
    );
  };
  
  export default Quiz1;