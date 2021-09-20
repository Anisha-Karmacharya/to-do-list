import React from "react";
import {FaPlusSquare} from "react-icons/fa";

const Form = () => {
    return(
    <form className="form_todo">
      <input type="text" className="new-todo form-control" name="text" placeholder="What needs to be done?"/>
      <button className="btn" type="submit" onClick = {() => addTodo()}>
       < FaPlusSquare  className="icon" />
      </button>
    </form>
    )
}

export default Form;