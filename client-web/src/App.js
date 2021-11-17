import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { default as PublicLayout } from './layouts/Public';
import Home from './views/Home';
import Profile from './views/Profile';
import NotFound from './views/NotFound';
import { subjects } from './testing/subjects';
import { userTeacher } from './testing/userTeacher';

const App = () => {
  return (
    <BrowserRouter>
      <PublicLayout>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profile" exact>
            <Profile user={userTeacher} subjects={subjects} />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </PublicLayout>
    </BrowserRouter>
  );
};

export default App;
