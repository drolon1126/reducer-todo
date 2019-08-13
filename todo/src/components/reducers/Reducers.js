const initialState = {
  todos:[]
};

const todoReducer = (state,action) => {
  switch(action.type){
    case 'ADD_TODO':
      return {...state, todos:[
        ...state.todos, 
        {
          task:action.payload, 
          completed:false, 
          id:(Date.now() + Math.floor(Math.random()*100))
        }
      ]};
    case 'TOGGLE_TODO':
      return {...state, 
        todos:state.todos.map(todo=>{
          if(todo.id===action.payload){
            return {...todo, completed: !todo.completed};
          }
          return todo;
        })
      };
    case 'CLEAR_TODOS':
      return {...state, todos: state.todos.filter(todo=>!todo.completed)};
    default:
      return state;
  }
};

export {initialState, todoReducer};