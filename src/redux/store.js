import { createStore } from 'redux';
const store = createStore(addTodo, ['Use Redux']);

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

store.dispatch(addTodo('Read the docs'))
store.dispatch(addTodo('Read about the middleware'))

export default store;