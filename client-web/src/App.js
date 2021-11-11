import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Signup from "./views/Signup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { default as PublicLayout } from "./layouts/Public";

const App = () => {
  return (
    <BrowserRouter>
      <PublicLayout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </PublicLayout>
    </BrowserRouter>
  );
};

export default App;
