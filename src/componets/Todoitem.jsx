import {useTodos} from "../store/todos.js";
import {Filters} from "./Filters.jsx";

export const Todoitem = ({t}) => {

    const {toggle , remove} = useTodos()


    return (
        <div className={` todo ${t.done ? 'todo_done' : ''  }`}>
            <label >
                <input
                    type="checkbox"
                    checked={t.done}
                    onChange={() => toggle(t.id)}
                />
                <span>{t.title}</span>

            </label>
            <button onClick={() => remove(t.id)}>удалить</button>
        </div>
    )
}