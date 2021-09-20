import React, {useState} from "react"
import "./App.css"
// Importing components
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([]);
  const [input , setInput] = useState("");
  const [completed, setCompleted] = useState([]);

  return(
    <div className="App">
      <div className="container">
        <header>
          <h1> To Do List</h1>
        </header>
        <Form 
          input={input}
          setInput={setInput}
          todos={todos} 
          setTodos={setTodos} 
          
        />

        <TodoList 
          todo={todos} 
          setTodo={setTodos}
          completed={completed}
          setCompleted={setCompleted}
          />
      </div>  
    </div>
  ) 
}

export default App;