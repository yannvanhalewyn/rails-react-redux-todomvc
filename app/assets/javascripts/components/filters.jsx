import React         from 'react';
import actions       from '../actions';
import {FilterTypes} from '../constants';

export default class extends React.Component {
  render() {
    return <ul className="filters">
      <li>
        <a
          href="#"
          className={this.props.filterType == FilterTypes.ALL ? 'selected' : ''}
          onClick={this._onAll.bind(this)} >
          All
        </a>
      </li>
      <li>
        <a
          href="#"
          className={this.props.filterType == FilterTypes.ACTIVE ? 'selected' : ''}
          onClick={this._onActive.bind(this)}>
          Active
        </a>
      </li>
      <li>
        <a
          href="#"
          className={this.props.filterType == FilterTypes.COMPLETED ?
                                              'selected' : ''}
          onClick={this._onCompleted.bind(this)} >
          Completed
        </a>
      </li>
    </ul>
  }

  _onAll() { actions.setFilterType(FilterTypes.ALL); }
  _onActive() { actions.setFilterType(FilterTypes.ACTIVE); }
  _onCompleted() { actions.setFilterType(FilterTypes.COMPLETED); }
}
