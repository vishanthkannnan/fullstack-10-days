 import { useState, useEffect } from "react";

 const Effect = () => {   
   const [users, setUsers] = useState([]);

   useEffect(() => {
     fetch('http://localhost:4000/get')
       .then((res) => res.json())
       .then((data) => setUsers(data))
       .catch((error) => {
         console.error("Error fetching users:", error);
       });
   }, []);
   console.log(users);
  
   return (
       <div>
        <h2>users</h2>
       {users.map((user) => (
         <div key={user.id}>
           <h3>{user.name}-Salary: {user.salary}</h3>
          
         </div>
        ))}
        </div>
      
    )}
export default Effect;