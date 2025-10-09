import './App.css'
import {Counter} from "./componets/Counter.jsx";
import {useTheme} from "./store/theme.js";
import {UserList} from "./componets/UserList.jsx";
import {TodosPage} from "./componets/TodosPage.jsx";
import {Filters} from "./componets/Filters.jsx";

function App() {
    const {theme, toggle , items, clear} = useTheme()

    document.body.style.background =  theme

  return (
    <>

        <TodosPage/>
        <button onClick={() => toggle()} >toggle theme :3</button>
    </>
  )
}

export default App
