import React from "react";
import {FaCheck, FaTrashAlt} from "react-icons/fa";

const Todo = () => {
    return(
        <div className="todos_wrapper">
        <div className="todos_list">
          <h3 className="todo_title">Todos List</h3>
          <div className="todo_card" >
              <p className="card_text"></p>
              <FaCheck  className="icon-check-todo"/>
              <FaTrashAlt  className="icon-trash-todo"/>
            </div>
        </div>
        <div className="todos_list">
          <h3 className="todo_title">Completed</h3>
        </div>
       </div>
    )
}

export default Todo;