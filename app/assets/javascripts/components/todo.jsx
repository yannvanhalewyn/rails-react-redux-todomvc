import React   from 'react';
import Toggle  from './toggle.jsx';
import actions from '../actions';

const ESCAPE_KEY = 27;
const ENTER_KEY  = 13;

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editing: false, editText: props.title};
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.editing && this.state.editing) {
      let node = this.refs.input;
      node.focus();
      node.setSelectionRange(node.value.length, node.value.length);
    }
  }

  render() {
    var classNames = [];
    if (this.props.completed) classNames.push("completed");
    if (this.state.editing) classNames.push("editing");

    return (
      <li className={classNames.join(" ")}>
        <div className="view">
          <Toggle
            toggled={this.props.completed}
            idx={this.props.idx}
            checked={this.props.completed}
          />
          <label onDoubleClick={this._onStartEditing.bind(this)}>{this.props.title}</label>
          <button className="destroy" onClick={this._onDestroy.bind(this)}></button>
        </div>
        <input
          ref="input"
          className="edit"
          value={this.state.editText}
          onChange={this._onChange.bind(this)}
          onBlur={this._onBlur.bind(this)}
          onKeyDown={this._onKeyDown.bind(this)}
        />
      </li>
    )
  }

  _onDestroy() {
    actions.destroy(this.props.idx);
  }

  _onChange(e) {
    this.setState({editText: e.target.value})
  }

  _onStartEditing() {
    this.setState({editing: true});
  }

  _onBlur(e) {
    this.setState({editing: false});
    actions.updateTitle(this.props.idx, this.state.editText);
  }

  _onKeyDown(e) {
    switch (e.which) {
      // bleedthrough on purpose
      case ESCAPE_KEY:
        this.setState({editText: this.props.title})
      case ENTER_KEY:
        this.setState({editing: false});
    }
  }
}
