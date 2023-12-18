import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import Basket from "./Pages/Basket/Basket";
import Contact from "./Pages/Contact/Contact";
import Courses from "./Pages/Courses/Courses";
import Login from "./Pages/Login/Login";

const routesArray = [
  { path: "/", element: <Home /> },
  { path: "/categories", element: <Categories /> },
  { path: "/basket", element: <Basket /> },
  { path: "/contact", element: <Contact /> },
  { path: "/courses", element: <Courses /> },
  { path: "/login", element: <Login /> },
];

export default routesArray;
