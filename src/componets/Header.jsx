import {NavLink, useNavigate} from "react-router-dom";
import "../Todos.css"

export const Header = () => {

    const navigate = useNavigate();


    return (
        <header>

            <div className="nav">
                <div className="nav_item" >
                    <ul onClick={ () => navigate('/')}>todos</ul>
                    <ul onClick={ () => navigate('/stats')}>statistics</ul>
                </div>
            </div>

        </header>
    )
}