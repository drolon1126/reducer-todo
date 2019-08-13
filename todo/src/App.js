import React, {useReducer} from 'react';
import  {initialState, todoReducer} from './components/reducers/Reducers.js'
import Todos from './components/todos/Todos.js';
import TodoForm from './components/todos/TodoForm.js';

import './App.css';

function App() {
  const [todoList, dispatch] = useReducer(todoReducer,initialState);
  return (
    <div className="App">
      <Todos todoList={todoList} dispatch={dispatch}/>
      <TodoForm dispatch={dispatch}/>
    </div>
  );
}

export default App;
