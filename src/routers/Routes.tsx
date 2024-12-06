import Home from "../components/page/home";
import Contact from "../components/page/contact";
import About from "../components/page/about";
import Project from "../components/page/projects";
import Service from "../components/page/services";
import AboutItem from "../components/page/about/aboutItem";
import Error404 from "../components/page/error404";
import ProjectList from "../components/page/projects/projectList";
import ProjectAdd from "../components/page/projects/projectAdd";
import ProjectItem from "../components/page/projects/projectList/projectItem";
import User from "../components/page/user";
import ChangePassword from "../components/page/user/changePassword";
import Profile from "../components/page/user/profile";
import PrivateRoute from "../components/page/user/PrivateRoute";
import Login from "../components/page/user/Login";
import { CounterApp } from "../components/page/redux";
export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: ":id",
        element: <AboutItem />,
      },
    ],
  },
  {
    path: "/projects",
    element: <Project />,
    children: [
      {
        path: "projects-list",
        element: <ProjectList />,
      },
      {
        path: ":projectId",
        element: <ProjectItem />,
      },
      {
        path: "add",
        element: <ProjectAdd />,
      },
    ],
  },
  {
    path: "/services",
    element: <Service />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },{
    path: "/redux",
    element: < CounterApp/>,
  },

  {
    path: "/admin",
    element: <PrivateRoute />, // Protect the /admin route and its children
    children: [
      {
        path: "",
        element: <User />, // Main user route
        children: [
          {
            path: "profile", // Profile is a child of User
            element: <Profile />,
          },
          {
            path: "change-password", // ChangePassword is a child of User
            element: <ChangePassword />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
