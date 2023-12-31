import '../index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./home/Home";
import Popular from "./popular/Popular";
import Battle from "./battle/Battle";
import Nav from "./Nav";
import BattleResult from "./battle/BattleResult";
import {Provider} from "react-redux";
import store from "./redux";

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

const App = () =>
    <Provider store={store} >
        <RouterProvider router={router} />
    </Provider>

export default App;