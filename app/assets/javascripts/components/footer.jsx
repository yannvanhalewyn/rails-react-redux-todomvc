import React from 'react'

var itemOrItems = (n) => n == 1 ? "item" : "items";

var countUncompleted = (todos) => {
  return todos.filterNot((t) => t.get('completed')).size;
}

export default class Footer extends React.Component {
  render() {
    if (this.props.todos.isEmpty()) return null;
    var uncompletedCount = countUncompleted(this.props.todos);
    return (
      <footer className="footer">
        <span className="todo-count">
          {uncompletedCount} {itemOrItems(uncompletedCount)} left
        </span>
      </footer>
    )
  }
}
