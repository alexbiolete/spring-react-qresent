import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Profile from './views/Profile';
import { default as PublicLayout } from "./layouts/Public";
import { subjects } from './testing/subjects';
import { userTeacher } from './testing/userTeacher';
import DashboardProfessor from './views/DashboardProfessor';
import DashboardStudent from './views/DashboardStudent';
import DashboardAdmin from './views/DashboardAdmin';
import Development from './views/Development';

const App = () => {
  const userTypes = [
    {
      value: "student",
      label: "Student",
    },
    {
      value: "professor",
      label: "Professor",
    },
    {
      value: "admin",
      label: "Administrator",
    }
  ];
  const [userType, setUserType] = useState("professor");

  var dashboardComponent;
  if (userType === "student") {
    dashboardComponent = DashboardStudent;
  } else if (userType === "professor") {
    dashboardComponent = DashboardProfessor;
  } else if (userType === "admin") {
    dashboardComponent = DashboardAdmin;
  }

  return (
    <BrowserRouter>
      <PublicLayout>
        <Switch>
          <Route path="/" exact>
            <Home
              userTypes={userTypes}
              userType={userType}
              setUserType={setUserType}
            />
          </Route>
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/profile" exact>
            <Profile user={userTeacher} subjects={subjects} />
          </Route>
          <Route path="/dashboard" component={dashboardComponent} exact />
          <Route path="/dev" component={Development} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </PublicLayout>
    </BrowserRouter>
  );
};

export default App;
