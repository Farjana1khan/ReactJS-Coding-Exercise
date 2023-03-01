import React, { useState } from 'react'
import Child from "./Child"
import "./Style.css"

export default function Parent() {

    const [value, setValue] = useState("Update Parent state value from Child")
    return (
        <>
            <div className="wrapper">
        <h1>Parent</h1>
        <div className="box-wrapper">{value}</div>
<Child settValue={setValue} />
      </div>
        </>
    )
}
