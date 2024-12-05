import {
  useRoutes,
} from "react-router-dom";
import { routes } from "./Routes";
import Layout from "../components/Layout";



const AppRouter = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: routes,
    },
  ]);

  return routing; 
};

export default AppRouter;
