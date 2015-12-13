import React from 'react'

export default class Header extends React.Component {
  render() {
    return <header>
        <h1>todos</h1>
        <input className="toggle-all" type="checkbox" />
        <input className="new-todo" type="" placeholder="What needs to be done?" />
      </header>
  }
}
