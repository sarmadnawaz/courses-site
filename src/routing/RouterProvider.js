import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Explore } from '../pages/Explore';
import { Home } from '../pages/Home';
import { SignUp } from '../pages/SignUp'
const router = createBrowserRouter([
    {
        path: '/signup',
        element : <SignUp />
    },
    {
        path: '/',
        element : <Home />
    },
    {
        path: '/explore',
        element : <Explore />
    }
])

export const RoutingProvider = (props) => {
    return <RouterProvider router={router} />
}