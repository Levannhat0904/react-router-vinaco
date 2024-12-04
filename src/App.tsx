import React from "react";
import AppRouter from "./routers/AppRouter";
import "./styles/App.css";
const App: React.FC = () => {
  return (
    <>
      <div className="container">
          <AppRouter />
      </div>
    </>
  );
};

export default App;
