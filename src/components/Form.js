import React from "react";
import {FaPlusSquare} from "react-icons/fa";

const Form = ({input, setInput, todos, setTodos}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInput(e.target.value)
    };
// to prevent rendering while we click button
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            { text: input, completed:false, id: Math.random()*1000}
        ]);
        setInput("")
    };
    return(
    <form className="form_todo">
        <input 
            type="text" 
            className="form-control"
            placeholder="What needs to be done?" 
            onChange={inputTextHandler} 
            value={input}
        />
       < FaPlusSquare  className="btn" type="submit" onClick={submitTodoHandler} />
    </form>
    )
}

export default Form;