import React from 'react';
import actions from '../actions';

export default class extends React.Component {
  render() {
    return <ul className="filters">
      <li><a href="#" onClick={this._onAll}>All</a></li>
      <li><a href="#" onClick={this._onActive}>Active</a></li>
      <li><a href="#" onClick={this._onCompleted}>Completed</a></li>
    </ul>
  }
}
