import React from 'react';
import Todo   from './todo.jsx';

export default class Todos extends React.Component {
  render() {
    return <section className="main">
      <ul className="todo-list">
        {this.props.todos.map(this._renderTodo)}
      </ul>
    </section>
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
