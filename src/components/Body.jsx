import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, } from "react-router-dom";
import { RouterProvider } from "react-router-dom";


const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);




  // 'onAuthStateChanged' continues to work in the background.
  //Every time something changes in auth (sign-in, sign-out, token refresh), Firebase calls your callback.

  return (
    <div>
      <RouterProvider router={appRouter} />

    </div>
  )
}
export default Body;

