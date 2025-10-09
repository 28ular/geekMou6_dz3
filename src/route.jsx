import {createBrowserRouter} from "react-router-dom";
import {TodosPage} from "./componets/TodosPage.jsx";
import {Layout} from "./componets/Layout.jsx";
import {Stats} from "./componets/Stats.jsx";

export const route = createBrowserRouter([{
    path:'/',
    element: <Layout/>,
    children:[
        {index:true, element:<TodosPage/>},
        {path: 'stats' , element: <Stats/>}
    ]
}])