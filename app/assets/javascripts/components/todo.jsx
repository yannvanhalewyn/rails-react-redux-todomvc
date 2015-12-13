import React from 'react';
import Toggle from './toggle.jsx';

export default class Todo extends React.Component {
  render() {
    return <li className={this.props.completed ? "completed" : "" }>
      <div className="view">
        <Toggle toggled={this.props.completed} id={this.props.id}/>
        <label>{this.props.title}</label>
        <button className="destroy"></button>
      </div>
    </li>
  }
}
