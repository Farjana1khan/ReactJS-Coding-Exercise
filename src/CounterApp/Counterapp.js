import React, { useState } from 'react'

export default function Counterapp() {

    const [count,  setCount] = useState(0)

    const Incrememt = ()=>{
        setCount((count)=>count + 1)
    }

    const Decrement = ()=>{
        setCount((count)=>count - 1)
    }

    return (
        <div className='counter'>
            <div className='cnt'>{count}</div>
            
            <button className='btn' type='button' style={{
                color:"green"
            }} onClick={Incrememt}>+</button>
            <button className='btn' type='button' style={{
                color:"red"
            }}  onClick={Decrement}>-</button>
        </div>
    )
}
