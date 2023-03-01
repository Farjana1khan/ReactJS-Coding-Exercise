import React from 'react'

export default function Parent({children}) {
    return (
        <div>
            <h3>Parent Component</h3>
            {children}
        </div>
    )
}
