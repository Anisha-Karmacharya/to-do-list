import React, {useState, useEffect} from "react"
import "./App.css"
// Importing components
import Form from "./components/Form"
import Todo from "./components/Todo"

function App() {
  const [todos, setTodos] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [input , setInput] = useState('');
  const addTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input
    }
    setTodos([todo, ...todos]);
  }
  return(
    <div className="App">
      <div className="container">
        <Form />
        <Todo />
      </div>  
    </div>
  ) 
}

export default App;