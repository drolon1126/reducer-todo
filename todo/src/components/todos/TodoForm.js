import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitTask = e => {
    e.preventDefault();
    this.props.dispatch({type:'ADD_TODO', payload:this.state.task});
  }
  clearTasks = e => {
    e.preventDefault();
    this.props.dispatch({type:'CLEAR_TODOS'});
  }
  render() {
    return (
        <form onSubmit={this.submitTask}>
          <input
            type='text'
            value={this.state.task}
            name='task'
            onChange={this.handleChange}
            placeholder='Add New Task...'
          />
          <button className="add-btn">
            Add
          </button>
          <button className="clear-btn" onClick={this.clearTasks}>
            Clear Completed
          </button>
        </form>
    );
  }
}


export default TodoForm;