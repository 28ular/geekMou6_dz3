import {useTodos} from "../store/todos.js";

export const Stats = () => {


    const {items } = useTodos()
    const done = items.filter(t => t.done).length;
    const doneS = items.filter(t => !t.done).length;

    return (

        <div className="cont_stats">
            <h1>СТАТИСТИКА</h1>
            <div>всего задач: {items.length}</div>
            <div>всего выполненых задач: {done || 0}</div>
            <div>всего активных задач: {doneS}</div>



        </div>


    )
}