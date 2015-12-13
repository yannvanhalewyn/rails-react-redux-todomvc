import React from 'react';
import { actions } from '../store';

export default class Toggle extends React.Component {
  render() {
    return <input onChange={this._onClick.bind(this)} type="checkbox" />
  }

  _onClick() {
    actions.toggle(this.props.id);
  }
}
