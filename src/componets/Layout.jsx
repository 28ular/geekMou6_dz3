import {Header} from "./Header.jsx";
import {Link, NavLink, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <main className="content">
                <Outlet/>
            </main>
            <footer className="footer"><Link to="https://t.me/uu_mrts" className="link">Made by Ular</Link></footer>
        </div>
    )
}