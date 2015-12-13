import React from 'react';
import { actions } from '../store';

var isChecked = (todo) => todo.get('completed');
var allChecked = (todos) => todos.every(isChecked);

export default class Header extends React.Component {
  render() {
    return <header>
        <h1>todos</h1>
        <form onSubmit={this._onSubmit.bind(this)}>
          <input ref="input" className="new-todo" type="" placeholder="What needs to be done?" />
        </form>
        <input
          checked={allChecked(this.props.todos)}
          onChange={this._onToggleAll.bind(this)}
          className="toggle-all"
          type="checkbox"
        />
      </header>
  }

  _onSubmit(e) {
    e.preventDefault();
    var newText = this.refs.input.value.trim();
    this.refs.input.value = "";
    actions.add(newText);
  }

  _onToggleAll(e) {
    var checked = e.target.checked;
    actions.toggleAll(checked);
  }
}
