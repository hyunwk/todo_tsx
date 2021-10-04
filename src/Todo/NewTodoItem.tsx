import { observer } from 'mobx-react';
import { NewTodoItemViewmodel } from './NewTodoItem.viewmodel';

export const NewTodoItem: React.FunctionComponent<{
    viewmodel: NewTodoItemViewmodel,
}> = observer(
    (props) => {
        const {
            viewmodel,
        } = props;
        return (
            <div>
                <p>{viewmodel.text}</p>
                <input 
                    type="text" value={viewmodel.text}
                    onChange={
                        (e) => 
                            viewmodel.setText(e.target.value)
                    }
                />
                <button
                    type="button"
                    onClick={() => viewmodel.addTodo()}
                >
                    add
                </button>
            </div>
        )
    }
)