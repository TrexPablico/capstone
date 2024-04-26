import Home from "./views/Home";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Register from "./views/Register";
import Training from "./views/Training";
import Flexibility from "./views/flexibility";
import Nutrition from "./views/nutrition";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "Profile",
    path: "/profile/:user_id",
    element: <Profile />,
  },
  {
    name: "Register",
    path: "/register",
    element: <Register />,
  },
  {
    name: "Training",
    path: "/training",
    element: <Training />,
  },
  {
    name: "Flexibility",
    path: "/flexibility",
    element: <Flexibility />,
  },
  {
    name: "Nutrition",
    path: "/nutrition",
    element: <Nutrition />,
  },
];

export default routes;
