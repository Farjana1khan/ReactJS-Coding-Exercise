import React from 'react'

export default function UsersArray() {

    const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 }
      ];

    return (
        <div>
            {
                users && users.map((user, index)=>(
                    <div key={index}>
                        <h1>{user.name}</h1>
                    </div>
                ))
            }
        </div>
    )
}
