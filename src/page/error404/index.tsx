import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", {
        state: "redirect from location",
      });
    }, 2000);
  }, [navigate]);
  return <h1>404 page</h1>;
}
export default Error404;
