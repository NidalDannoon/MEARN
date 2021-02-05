import React, {useState} from 'react';

const TodoComponent =() => {
    const [todoList,setTodoList] = useState([]);
    const [newTask,setNewTask] = useState("");

    const onClickHandler =(e) => {
        setTodoList(todoList.filter( (item,index) => index !== parseInt(e.target.id)));
    }

    const checkBoxHandler =(e) => {
        setTodoList(todoList.map( (item,index) => index === parseInt(e.target.id) ? {task: item.task, status: e.target.checked} : {task: item.task, status: item.status}));
    }
    const onSubmitHandler =(e) => {
        e.preventDefault();
        setTodoList(todoList.concat({ task: newTask,status: false }));
        setNewTask("");
    }
    return(
        <>
            <h1>Todo List:</h1>
            <ul>
                {todoList.map( (item, index) => {
                    return <li key={index}>
                                {item.status ? <span>{item.task} </span>: <span>{ item.task }</span>}
                                <input type="button" id={index} value="delete" onClick={onClickHandler}/>
                                <label> Done?
									<input type="checkbox" checked={item.status} id={index} onChange={checkBoxHandler}/>
                                </label>
                            </li>
                })}
            </ul>
            <form onSubmit={onSubmitHandler}>
                <input type={"text"} onChange={(e) => setNewTask(e.target.value)} value={newTask}/>
                <input type={"submit"} value="Add"/>
            </form>
        </>
    )
}

export default TodoComponent;