// React Router Dom
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Context
import { useAuthContext } from "./hooks/useAuthContext";

// Pages
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const { user } = useAuthContext();
const navigate = Navigate();

// router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        errorElement: <Error />,
      },
      {
        path: "/signup",
        element: <Signup />,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
