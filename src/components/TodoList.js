import React, {useEffect} from "react";
import {FaCheck, FaTrashAlt} from "react-icons/fa";

const TodoList = ({completed, setCompleted, todo, setTodo}) => {
  const addtoCompleted = (id) => {
    const item = todo.find(x => x.id === id);
    setCompleted([item, ...completed]);
    const filterarray = todo.filter(x => x.id !== id);
    setTodo(filterarray);
  }

  const deleteTodo = (id) => {
    const filterarray = todo.filter(x => x.id !== id);
    setTodo(filterarray);
  }
    return(
        <div className="todos_wrapper">
        <div className="todos_list">
          <h3 className="todo_title">Todos List</h3>
          {todo.map((item) => 
            <div className="todo_card" key={item.id}>
              <p className="card_text">{item.text}</p>
              <FaCheck onClick={() => addtoCompleted(item.id)} className="icon-check-todo"/>
              <FaTrashAlt onClick={() => deleteTodo(item.id)} className="icon-trash-todo"/>
          </div>
          )}
        </div>
        <div className="todos_list">
          <h3 className="todo_title">Completed</h3>
          {completed.map((item) => 
            <div className="completed_card" key={item.id}>
              <p className="card_text">{item.text}</p>
            </div>
           )}
        </div>
       </div>
    )
}

export default TodoList;