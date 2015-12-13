import React from 'react';
import { actions } from '../store';

export default class Header extends React.Component {
  render() {
    console.log("foo");
    return <header>
        <h1>todos</h1>
        <input className="toggle-all" type="checkbox" />
        <form onSubmit={this._onSubmit.bind(this)}>
          <input ref="input" className="new-todo" type="" placeholder="What needs to be done?" />
        </form>
      </header>
  }

  _onSubmit(e) {
    e.preventDefault();
    var newText = this.refs.input.value.trim();
    actions.add(newText);
  }
}
