import React from 'react';
import Toggle from './toggle.jsx';

export default class Todo extends React.Component {
  render() {
    return <div className="view">
      <Toggle toggled={this.props.completed} id={this.props.id}/>
      {this.props.id} - {this.props.title}
      {this.props.completed ? "Completed" : "Not completed"}
    </div>
  }
}
