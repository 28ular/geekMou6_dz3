import {Header} from "./Header.jsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <main className="content">
                <Outlet/>
            </main>
            <footer className="footer">Rick & Morty Explorer</footer>
        </div>
    )
}