import store from './store';

export default {
  destroy(id) {
    $.ajax({url: `api/todos/${id}`, type: 'delete', success: (e) => console.log(e) })
  },

  create(text) {
    return $.post('api/todos', {title: text});
  },

  update(id) {
  },

  fetch() {
    return $.ajax({url: 'api/todos'}).then((data) => store.dispatch({type: "fetch", data}))
  }
}
