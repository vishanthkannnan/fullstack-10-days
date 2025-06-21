import { useReducer } from "react"
let initialValue={like:0,dislike:0};
const counter = (state,action) => {
    switch(action.type){
        case "LIKE":
            return { like: state.like + 1,dislike: state.dislike}
        case "DISLIKE":
            return { like: state.like,dislike: state.dislike + 1}
        default:
            return state;
    }
}


const ExReducer = () => {
    const [{like,dislike}, dispatch] = useReducer(counter, initialValue);
  return (
    <div>
        <h1>Like:{like}</h1>
        <h1>Dislike:{dislike}</h1>
        <button onClick={() => dispatch({ type: "LIKE" })}>👍</button>
        <button onClick={() => dispatch({ type: "DISLIKE" })}>👎</button>

    </div>
  )
}

export default ExReducer


