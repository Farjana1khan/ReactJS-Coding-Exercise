import { useEffect, useState } from "react";

function Count() {
    const [count, setCount] = useState(0);
   
    useEffect(() => {
    console.log(`Count is ${count}`);
    setCount(count + 1);
    }, []);
   
    return (
    <div>
    <p>Count: {count}</p>
    </div>
    );
   }

   export default Count