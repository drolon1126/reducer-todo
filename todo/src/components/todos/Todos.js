import React from 'react';
import Todo from './Todo.js';

const Todos = (props) =>{
  return(
    <ul className="todo-list">
      {props.todoList.todos.map(task => {
          return (
            <Todo key={task.id} task={task} dispatch={props.dispatch} />
          );
        
        })
      } 
    </ul>
  );
}

export default Todos;