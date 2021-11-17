import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import NotFound from './views/NotFound';
import { default as PublicLayout } from './layouts/Public';
import DashboardProfesor from './views/DashboardProfesor';
import DashboardStudent from './views/DashboardStudent';
import DashboardAdmin from './views/DashboardAdmin';


const App = () => {
  return (
    <BrowserRouter>
      <PublicLayout>
        <Switch>
          <Route path="/" component={Home} exact />
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
