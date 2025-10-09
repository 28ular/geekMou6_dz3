import {useTodos} from "../store/todos.js";
import {useState} from "react";

export const Todoinput = () => {

    const {add} = useTodos()
    const [title, setTitle] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!title.trim()) return
        add(title)
        setTitle('')
    }

    return (
        <>
            <form className="todo_input" onSubmit={onSubmit}>
                <label >
                    <input
                        type="text"
                        value={title}
                        placeholder="введите название задачи"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <button type='submit'>создать</button>
            </form>
        
        </>
    )
}