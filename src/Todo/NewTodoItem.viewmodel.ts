import { TodoListViewModel } from './TodoList.viewmodel';
import { makeAutoObservable } from 'mobx';
import { TodoItemViewModel } from './TodoItem.viewmodel';


export class NewTodoItemViewmodel {
    constructor(
        public text: string,
        public todoListVM: TodoListViewModel,
    ) {
        makeAutoObservable(this, {
            todoListVM: false,
        });
    }

    setText(text: string) {
        this.text = text;
    } 

    addTodo() {
        this.todoListVM.addTodo(
            new TodoItemViewModel(this.text, false),
        )
        this.text = '';
    }
}