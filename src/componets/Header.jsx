import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <div className="brand"> Zustand todo</div>

            <nav className="nav">

                <NavLink to={'/'} end className={({isActive}) => isActive ?  'link active' : 'link'  }>Задачи</NavLink>
                <NavLink to={'/stats'} className={({isActive}) => isActive ?  'link active' : 'link'  }>Статистика</NavLink>


            </nav>

        </header>
    )
}