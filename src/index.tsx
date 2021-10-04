import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TodoItemViewModel } from './Todo/TodoItem.viewmodel';
import { TodoItem } from './Todo/TodoItem';
import { TodoListViewModel } from './Todo/TodoList.viewmodel';
import { TodoList } from './Todo/TodoList';
import { NewTodoItem } from './Todo/NewTodoItem';
import { NewTodoItemViewmodel } from './Todo/NewTodoItem.viewmodel';

const todoItemViewModel = new TodoItemViewModel(
  'hello',
  false,
)

const todoItemViewModel2 = new TodoItemViewModel(
  'hello',
  false,
)

const todoListVM = new TodoListViewModel(
  [todoItemViewModel, todoItemViewModel2],
);

const newTodoItemVM = new NewTodoItemViewmodel(
  '',
  todoListVM,
)

ReactDOM.render(
  <React.StrictMode>
    <TodoList
      viewmodel={todoListVM}
    />
    <NewTodoItem
      viewmodel={newTodoItemVM}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
