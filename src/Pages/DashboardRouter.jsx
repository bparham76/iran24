import { createBrowserRouter } from "react-router-dom"

import Dashboard from "./Dashboard"

import Home from "./Home"

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'hello',
                element: <h1>Hello</h1>
            },
            {
                path: 'test',
                element: <h1>this is a test page</h1>
            }
        ]
    },
])

export default Routes