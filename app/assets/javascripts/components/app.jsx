import React         from 'react';
import Header        from './header.jsx';
import Todos         from './todos.jsx';
import Footer        from './footer.jsx';

export default class App extends React.Component {
  render() {
    let filterType = this.props.state.get('filterType');
    let todos      = this.props.state.get('todos');

    return <div className="todoapp">
      <Header todos={todos} />
      <Todos  todos={todos} filterType={filterType} />
      <Footer todos={todos} filterType={filterType} />
    </div>
  }
}
