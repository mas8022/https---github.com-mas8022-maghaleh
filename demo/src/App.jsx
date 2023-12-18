import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import routesArray from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = useRoutes(routesArray);
  return (
    <>
      <Navbar />
      <div className="container">{routes}</div>
    </>
  );
}

export default App;
