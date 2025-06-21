import { useEffect } from "react"
import { useState } from "react"

const Effects = () => {
    // useEffect(() => {
    //     console.log("Hii da");
    //     console.log("Venna");
    //     return () => {
    //         console.log("Bye da");
    //     }
        
    // },[])
    //const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
     useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))        
    },[])
    console.log(users);//optionally you can use console.log to see the data fetched

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())  
            .then(data => setPosts(data))
    },[])

  return (
    <div>
      <h1>  Effects</h1>
      {users.map((user) => (
        <div key={user.id}> 
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p> 
        </div>
        ))}
        <h2>Posts</h2>

        {posts.map((post) => (
        <div key={post.id}>     
            <h3>{post.title}</h3>
            <p>{post.body}</p>      

        </div>
        ))}
    </div>
  )
}

export default Effects
