import React from 'react';

export default class Todo extends React.Component {
  render() {
    return <div>{this.props.id} - {this.props.title}</div>
  }
}
