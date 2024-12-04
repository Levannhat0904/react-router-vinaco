import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
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
const AppRouter = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/about/:id", element: <AboutItem /> },
    {
      path: "/projects",
      element: <Project />,
      children: [
        { path: "projects-list", element: <ProjectList /> },
        { path: ":projectId", element: <ProjectItem /> },
        { path: "add", element: <ProjectAdd /> },
      ],
    },
    { path: "/services", element: <Service /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <Error404 /> }, // Mặc định 404
  ];
  const routerElement = useRoutes(routes);
  return (
    <>
      <Header />
      {routerElement}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<AboutItem />} />
        <Route path="/projects/" element={<Project />}>
          <Route path="projects-list" element={<ProjectList />} />
          <Route path=":projectId" element={<ProjectItem />} />
          <Route path="add" element={<ProjectAdd />} />
        </Route>
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes> */}
    </>
  );
};
export default AppRouter;
