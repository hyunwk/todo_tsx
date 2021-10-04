import { observer } from 'mobx-react';
import { TodoItem } from './TodoItem';
import { TodoListViewModel } from './TodoList.viewmodel';

export const TodoList: React.FC<{
    viewmodel: TodoListViewModel
}> = observer(({
    viewmodel,
}) => {
    return (
        <div>
            {viewmodel.todos.map(todoItemVM => {
                return (
                    <TodoItem
                        viewmodel={todoItemVM}
                    />
                );
            })}
            <hr />
            <div>
                <span> all done: </span>
                <input
                    type="checkbox"
                    checked={viewmodel.allDone}
                    onChange={() => viewmodel.setAllDone(!viewmodel.allDone)}
                />
            </div>
            <hr />
            

        </div>
    )
})