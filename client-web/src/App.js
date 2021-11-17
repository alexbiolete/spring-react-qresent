import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Profile from './views/Profile';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { default as PublicLayout } from "./layouts/Public";
import { subjects } from './testing/subjects';
import { userTeacher } from './testing/userTeacher';
import DashboardProfesor from './views/DashboardProfesor';
import DashboardStudent from './views/DashboardStudent';
import DashboardAdmin from './views/DashboardAdmin';

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
          <Route path="/profile" exact>
            <Profile user={userTeacher} subjects={subjects} />
          </Route>
          <Route path="/professor/dashboard" component={DashboardProfesor} exact />
          <Route path="/student/dashboard" component={DashboardStudent} exact />
          <Route path="/admin/dashboard" component={DashboardAdmin} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </PublicLayout>
    </BrowserRouter>
  );
};

export default App;
