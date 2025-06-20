import { useState, useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())     
      .then((data) => setPosts(data)); 
  }, []);

  useEffect(() => {
    console.log(posts);              
  }, [posts]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Effect;
