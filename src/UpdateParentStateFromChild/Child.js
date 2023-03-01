import React from 'react'

export default function Child({settValue}) {
    return (
        <div>

            <h1>Child </h1>
            <button onClick={()=>settValue("Parent has been updated!")}>Update</button>
        </div>
    )
}
