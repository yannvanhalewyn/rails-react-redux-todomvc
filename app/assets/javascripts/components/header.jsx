import React from 'react';
import ToggleAll from './toggleAll.jsx';
import actions from '../actions';

export default class Header extends React.Component {
  render() {
    return <header>
        <h1>todos</h1>
        <form onSubmit={this._onSubmit.bind(this)}>
          <input ref="input" className="new-todo" type="" placeholder="What needs to be done?" />
        </form>
        <ToggleAll todos={this.props.todos} />
      </header>
  }

  _onSubmit(e) {
    e.preventDefault();
    var newText = this.refs.input.value.trim();
    if (newText.length == 0) return;
    this.refs.input.value = "";
    actions.add(newText);
  }
}
