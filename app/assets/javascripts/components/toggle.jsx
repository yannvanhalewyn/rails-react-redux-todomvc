import React from 'react';
import { actions } from '../store';

export default class Toggle extends React.Component {
  render() {
    return <input
      className="toggle"
      type="checkbox"
      checked={this.props.checked}
      onChange={this._onClick.bind(this)}
    />
  }

  _onClick() {
    actions.toggle(this.props.idx);
  }
}
