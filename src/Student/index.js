

import React, {useState} from 'react'

    
    const data = [
    
      {
         id:1,
        name: "Sham",
       email: "abc@gmail.com",
          phone: 7885488734
      },
     {
         id:2,
         name: "Ram",
       email: "cdf@gmail.com",
          phone: 7885488734
      },
       {
                id:3,
      name: "Raj",
       email: "xyz@gmail.com",
          phone: 7885488734
      },
     
    ]
  



export default function App() {
// Fetch the contacts list and display 
// Write code to fetch the contacts details from the open source
//     rest endpoint and display the contacts details in the table And create Filter on contact name


const [contact, setContact] =  useState(data);

    const [searchTerm, setSearchTerm] = useState( '  ');


    const handleSearch = (event)=>{
        setSearchTerm(event.target.value)
    }
    


    const filteredContact =  contact.filter(contact=> 
        
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()))
  
  return(
    <>
<h1>Student List</h1>

<input
    type='text'
    placeholder="Search by name"
    value={searchTerm}
    onChange={handleSearch}
    />
        
        <table>
        <thead>
        <tr>
        <th> Name</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
        </thead>

            <tbody>
                {filteredContact.map((std, index)=>(
<tr key={std.id}>
<td>{index +1}</td>

    <td>
        {std.name}
    </td>
      <td>
        {std.email}
    </td>
      <td>
        {std.phone}
    </td>
</tr>
    
               ) )}
                </tbody>
        </table>
    </>

  )
    
}
