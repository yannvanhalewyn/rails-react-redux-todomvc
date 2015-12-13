import React     from 'react';
import Toggle    from './toggle.jsx';
import {actions} from '../store';

export default class Todo extends React.Component {
  render() {
    return <li className={this.props.completed ? "completed" : "" }>
      <div className="view">
        <Toggle toggled={this.props.completed} id={this.props.id} checked={this.props.completed}/>
        <label>{this.props.title}</label>
        <button className="destroy" onClick={this._onDestroy.bind(this)}></button>
      </div>
    </li>
  }

  _onDestroy() {
    actions.destroy(this.props.id);
  }
}
