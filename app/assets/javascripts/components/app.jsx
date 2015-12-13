import React  from 'react';
import Header from './header.jsx';
import Todos  from './todos.jsx';
import Footer from './footer.jsx';

export default class App extends React.Component {
  render() {
    return <div className="todoapp">
      <Header />
      <Todos todos={this.props.todos} />
      <Footer todos={this.props.todos} />
    </div>
  }
}
