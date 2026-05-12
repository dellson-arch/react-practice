import { createBrowserRouter ,  RouterProvider} from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

const Approutes = () => {
    const router = createBrowserRouter([
        {
            path : "/",
            element : <AuthLayout/>,
            children : [
                {
                    path : "",
                    element : <Login/>
                },
                {
                    path : "register",
                    element : <Register/>
                }

            ]
        }
    ])
    return <RouterProvider router={router}/>
}

export default Approutes