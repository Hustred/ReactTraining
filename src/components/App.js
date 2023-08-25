import '../index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home";
import Popular from "./popular/Popular";
import Battle from "./battle/Battle";
import Nav from "./Nav";
import BattleResult from "./battle/BattleResult";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Nav/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/popular",
                element: <Popular/>,
            },
            {
                path: "/battle",
                element: <Battle/>,
            },
            {
                path: "/battle/result",
                element: <BattleResult/>,
            },
            {
                path: "*",
                element: <h2>Error</h2>,
            }
        ]
    },
]);

const App = () => <RouterProvider router={router} />

export default App;