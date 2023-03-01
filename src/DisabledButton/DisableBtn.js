import React, { useState } from 'react'

export default function DisableBtn() {

    const [value, setValue] = useState("")
    return (
        <div>
            <input type="text" value={value}  onChange={(e)=>setValue(e.target.value)} />
            <button disabled={value.length < 1} >Click</button>
            <h3>{value}</h3>
        </div>
    )
}
