import { observer } from 'mobx-react';
import { TodoItemViewModel } from './TodoItem.viewmodel';

export const TodoItem: React.FunctionComponent<{
    viewmodel: TodoItemViewModel,
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
                <input
                    type="checkbox"
                    checked={viewmodel.done}
                    onChange={
                        () => viewmodel.setDone(
                            !viewmodel.done
                        )
                    }
                />
            </div>
        )
    }
)