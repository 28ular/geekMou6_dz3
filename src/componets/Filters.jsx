import {useTodos} from "../store/todos.js";

export const Filters = () => {

    const {filters , setFilter , search , setSearch} = useTodos()




    return (

        <div className="filters">
            <div className="chepset">
                {['all' , 'active' , 'done'].map(f => {
                   return <button key={f} className={`chip ${filters === f?'chip_active' : ''}`} onClick={() => setFilter(f)} >{f}</button>
                })}
            </div>
            <input
                type="text"
                placeholder='search..'
                value={search}
                onChange={e => setSearch(e.target.value) }
            />
        </div>
    )
}