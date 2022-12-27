import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Explore } from '../pages/Explore';
const router = createBrowserRouter([
    {
        path: '/explore',
        element : <Explore />
    }
])

export const RoutingProvider = (props) => {
    return <RouterProvider router={router} />
}