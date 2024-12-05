import Home from "../page/home";
import Contact from "../page/contact";
import About from "../page/about";
import Project from "../page/projects";
import Service from "../page/services";
import Header from "../components/Header"; // Import Header component
import AboutItem from "../page/about/aboutItem";
import Error404 from "../page/error404";
import ProjectList from "../page/projects/projectList";
import ProjectAdd from "../page/projects/projectAdd";
import ProjectItem from "../page/projects/projectList/projectItem";
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
  },
  {
    path: "*",
    element: <Error404 />,
  },
];
