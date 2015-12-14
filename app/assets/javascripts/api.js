import store from './store';

export default {
  destroy(id) {
    return $.ajax({url: `api/todos/${id}`, type: 'delete'});
  },

  create(text) {
    return $.post('api/todos', {title: text});
  },

  update(id, data) {
    return $.ajax({url: `api/todos/${id}`, type: 'put', data});
  },

  fetch() {
    return $.ajax({url: 'api/todos'});
  }
}
