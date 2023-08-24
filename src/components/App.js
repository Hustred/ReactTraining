import '../index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home";
import Popular from "./Popular";
import Battle from "./Battle";
import Nav from "./Nav";

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
                path: "*",
                element: <h2>Error</h2>,
            }
        ]
    },
]);

const App = () => <RouterProvider router={router} />

export default App;