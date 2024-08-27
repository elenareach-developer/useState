import React , {useState} from "react";

const UpdateObject = () => {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
    const [bgColor, setBgGColor] = useState("red")
    
      const updateColor = () => {
        setCar(previoseState=>{
            return {...previoseState, color: "blue"};
        })
        setBgGColor("blue")
      }
  return (
    <div className="box">
      <div className={"boxMx " +bgColor}>
        <div>  
            <h3> Model: {car.model}</h3>
            <h3> Year: {car.year}</h3>
            <h3> Color: {car.color}</h3>
        </div>
        <div>
            <button  onClick={updateColor}>Blue</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateObject;
