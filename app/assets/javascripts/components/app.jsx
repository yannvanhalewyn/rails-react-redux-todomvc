import React from 'react';
import Todo from './todo.jsx';

export default class App extends React.Component {
  render() {
    return <div>
      <h1>Todos</h1>
      {this.props.todos.map(this._renderTodo)}
    </div>
  }

  _renderTodo(todo) {
    return <Todo
      id={todo.id}
      title={todo.title}
      key={todo.id}
      completed={todo.completed}
    />
  }
}
