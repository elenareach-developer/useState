import React , {useState} from "react";

const Quiz3 = () => {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
      const [bgColor, setBgGColor] = useState("bg-red-300")
    
      const updateColor = () => {
       //update setCar with color 
       //update bgColor bg-blue-300
        
      }
  return (
    <div className="box">
      <div className="boxMx">
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

export default Quiz3;
