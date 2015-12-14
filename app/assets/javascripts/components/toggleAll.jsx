import React   from 'react';
import actions from '../actions';

var isChecked = (todo) => todo.get('completed');
var allChecked = (todos) => todos.every(isChecked);

export default class ToggleAll extends React.Component {
  render() {
    if (this.props.todos.isEmpty()) return null;
    return <input
      checked={allChecked(this.props.todos)}
      onChange={this._onToggleAll.bind(this)}
      className="toggle-all"
      type="checkbox"
    />
  }

  _onToggleAll(e) {
    var checked = e.target.checked;
    actions.toggleAll(checked);
  }

}
