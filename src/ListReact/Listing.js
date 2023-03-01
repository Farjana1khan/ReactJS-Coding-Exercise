import React, { useEffect, useState } from 'react'


export default function Listing() {


    const [post, setPost] = useState([])




const getData = ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
       return response.json()
    }).then((data)=>{
        setPost(data)
    })
}

useEffect(()=>{
     getData()
}, [])

    return (
        <div>
            <div>

            </div>
            {
                post && post.map((item, index)=>(
                    <div key={index}>
                       
                        <h4>{item.id}</h4>
                        <h3>{item.title}</h3>
                    
                    </div>
                ))
            }
        </div>
    )
}
