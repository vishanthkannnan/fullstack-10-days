import {useState} from 'react'


const state = () => {
    const [count, setCount] = useState(0);
    const [name,setlike] = useState("😁");
  return (
    <>
    
    <div>
        <h2>Count:{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
    <div>
        <h2>Like: {name}</h2>
        <button onClick={() => setlike("👍")}>Like</button>
        <button onClick={() => setlike("👎")}>Dislike</button>
    </div>
    </>
  )
}
export default state

