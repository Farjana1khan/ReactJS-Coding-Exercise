import React from 'react'

import Parent from './Parent'
import Child from './Child'
export default function Main() {
    return (
        <div>
            <Parent>
                <Child/>
            </Parent>
        </div>
    )
}
