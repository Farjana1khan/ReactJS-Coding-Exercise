import React, { useState } from 'react'
import ChildComponent from './ChildComponent'
function ParentComponent() {
    let [counter, setCounter] = useState(0)
    const callback = (valueFromChild) =>{
        setCounter(valueFromChild)
    }
    
  return (
    <div className='container-xl mt-lg-5'>
    <p className='m-4'>Value of counter : {counter}</p>
    <ChildComponent callbackFunc={callback} counterValue={counter} />
    </div>
  )
}

export default ParentComponent