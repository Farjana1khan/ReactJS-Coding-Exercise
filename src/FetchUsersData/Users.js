import React, { useEffect, useState } from 'react'

export default function Users() {
   // const url = "https://jsonplaceholder.typicode.com/users";
   const [user, setUsers] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
        return response.json()
        
      }).then((data)=>{
        setUsers(data)
      })
    }, [])

    
    const handleSearch = (e) =>{
        if(e.target.value === ""){
            setUsers(user)
            return
        } 
        
  const FilterUSers = user.filter((user)=>user.indexOf(e.target.value.toLowerCase()) !== -1)
  setUsers(FilterUSers)
    }


    return (
        <div>
            Display Users Data Name
            <div>
                <input  type="text" onClick={handleSearch}  />
            </div>
{user&&user.map((users, index)=>(
    <div>
        <h1>Name:={users.name}</h1>
    </div>
)

)}
        </div>
    )
}
