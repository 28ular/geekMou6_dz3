import { useTodos } from "../store/todos.js";
import { Todoinput } from "./Todoinput.jsx";
import { Todoitem } from "./Todoitem.jsx";
import {Filters} from "./Filters.jsx";

export const TodosPage = () => {
    const { items = [], search = '', filters = 'all' , forall , clearDone} = useTodos();

    const list = items
        .filter(t => {
            if (filters === 'all') return true;
            if (filters === 'active') return !t.done;
            if (filters === 'completed') return t.done;
            return true;
        })
        .filter(t => t.title.toLowerCase().includes(search.toLowerCase()));

    const done = items.filter(t => t.done).length;

    return (

        <section>
            <Filters/>

            <button className='specialBtn' onClick={forall}>All done</button>
            <button className='specialBtn' onClick={clearDone}>Delete done</button>
            <div>
                <h2>Задачи</h2>
                <span className="muted">
          всего: {items.length} / вып: {done}
        </span>
            </div>

            <Todoinput />

            {list.length === 0 && <p className="muted">Тут пусто, добавьте задачу</p>}

            <div className="list">
                {list.map(t => (
                    <Todoitem key={t.id} t={t} />
                ))}
            </div>
        </section>
    );
};
