import { createBrowserRouter } from "react-router-dom";
import About from "../components/pages/About";
import HomePage from "../components/pages/HomePage";
import Pricing from "../components/pages/Pricing";
import Team from "../components/pages/Team";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Subscribe from "../components/pages/Subscribe";
import AdminPanel from "../components/pages/admins/AdminPanel";
import Students from "../components/pages/admins/Students";
import Parents from "../components/pages/admins/Parents";
import Student from "../components/pages/admins/Student";


export const root = '/';
export const about = '/about';
export const team = '/team';
export const price = '/price';
export const login = '/login';
export const register = '/register';
export const student = '/student';
export const admin = '/admin';
export const childerns = '/admin/childerns';
export const parents = '/admin/parents';
export const childern = '/admin/childerns/:id';
export const parent = '/admin/parents/:id';

export const routes = createBrowserRouter([
  {path: root , element: <HomePage />},
  {path: about , element: <About />},
  {path: team , element: <Team />},
  {path: price , element: <Pricing />},
  {path: login , element: <Login />},
  {path: register , element: <Register />},
  {path: student , element: <Subscribe />},
  {path: admin , element: <AdminPanel /> , children:[
    {path: childerns , element: <Students />},
    {path: parents , element: <Parents />},
    {path: childern , element: <Student />},

  ]},
])