import React, { useState } from "react";

export default function Adding() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(0);

  const getAdd = () => {
    setTotal(number1 + number2);
  };

  const Mult = () =>{
    setTotal(number1 * number2)
  }

  const Devide = () =>{
    setTotal(number1 / number2)
  }
  const Per = () =>{
    const per = (number1 + number2) / 2
    
    setTotal(per) 
  }
  return (
    <div>
      <h3>Adding Two numbers</h3>
      <div>
        <input
          type="number"
          value={number1}
          onChange={(e )=> setNumber1(+e.target.value)}
          placeholder="Enter First Number"
        />

        <input
          placeholder="First Number"
          type="number"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
        />
        <button onClick={getAdd}>Add</button>
        <button onClick={Mult}>Multiplication</button>
        <button onClick={Devide}>Devide</button>
        <button onClick={Per}>Percentage</button>
      
          <h1>
            {total}
          </h1>
       
      </div>
    </div>
  );
}
