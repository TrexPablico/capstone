import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import { Container } from "react-bootstrap";
import Navbar from "./navbar.jsx";
import "./Global.css";
import FooterComponent from "./footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container fluid>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={route.element}
                exact
              />
            );
          })}
        </Routes>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default App;
