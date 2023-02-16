import React, { useState } from 'react'

export default function FilterList() {

    const List = [
        "banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "WaterApple"
    ]

    const [ fruitsList, setFruitsList] = useState(List)

    const handleSearch =(e)=>{
        
    if(e.target.event === ""){
        setFruitsList(List)
        return;
    }

    const filterValues = List.filter((item)=>item.toLowerCase().indexOf(e.target.value.toLowerCase()) !==-1)
    setFruitsList(filterValues)
    }

    return (
       <div className=' App'>
        <div >
            <input name='' type="text" className='fieled'
            placeholder='Search Fruits...' onChange={handleSearch} />
            </div>
        {
            fruitsList && fruitsList.map((fruit, index)=>(
            <div key={index}>
            <p className='fruits'>{fruit}</p>
            </div>
        ))}
       </div>
    )
}
