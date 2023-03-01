import React, { useEffect, useState } from 'react'

export default function User() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    const [userData, setUserData] = useState()
/** 
  // Sample Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/

const getuserData = async  ()=>{
   
    const response = await fetch(url)
    const jsonData = await response.json()
    setUserData(jsonData)

}

useEffect(()=>{
    getuserData()
})

    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>User Name: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            <p>Website:{userData.website}</p>
        </div>
    )
}
