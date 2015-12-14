import React         from 'react';
import Todo          from './todo.jsx';
import {FilterTypes} from '../constants';

var shouldNotRender = (todo, filterType) => {
  return (filterType == FilterTypes.ACTIVE && todo.get('completed')) ||
         (filterType == FilterTypes.COMPLETED && !todo.get('completed'));
};

export default class Todos extends React.Component {
  render() {
    if (this.props.todos.isEmpty()) return null;
    return <section className="main">
      <ul className="todo-list">
        {this.props.todos.map(this._renderTodo.bind(this))}
      </ul>
    </section>
  }

  _renderTodo(todo, idx) {
    if (shouldNotRender(todo, this.props.filterType))
      return null;
    return <Todo
      idx={idx}
      key={idx}
      title={todo.get('title')}
      completed={todo.get('completed')}
    />
  }
}
