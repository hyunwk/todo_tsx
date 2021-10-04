import { TodoItemViewModel } from './TodoItem.viewmodel';
import { makeAutoObservable } from 'mobx';

export class TodoListViewModel {
    constructor(
        public todos: TodoItemViewModel[] = [],
    ) {
        makeAutoObservable(this);
    }

    addTodo(todo: TodoItemViewModel) {
        this.todos.push(todo);
    }

    get allDone() {
        return this.todos.every(
            todoItem => 
                todoItem.done
        )
    }

    setAllDone(done: boolean) {
        this.todos.forEach(
            todoVM => todoVM.setDone(done)
        )
    }
}