import React from 'react'

function ChildComponent(props) {

    let childCounterValue = props.counterValue
  return (
    <div className='container-xl'>
    
    <button className=' m-md-4'  onClick={()=>props.callbackFunc(++childCounterValue)}>Increment Counter</button>
    <button  onClick={()=>props.callbackFunc(--childCounterValue)}>Decrement Counter</button>
    </div>
  )
}

export default ChildComponent