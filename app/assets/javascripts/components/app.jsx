var App = React.createClass({
  getInitialState() {
    return {todos: this.props.todos}
  },

  render() {
    return <div>
      <h1>Todos</h1>
      {this.state.todos.map(this._renderTodo)}
    </div>
  },

  _renderTodo(todo) {
    return <Todo id={todo.id} title={todo.title} key={todo.id} />
  }
})
