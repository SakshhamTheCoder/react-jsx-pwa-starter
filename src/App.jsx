import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { Home } from "./pages"
import { Navbar } from "./components"

const router = createBrowserRouter([
  {
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
