import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import NotFound from './views/NotFound';
import { default as PublicLayout } from './layouts/Public';

const App = () => {
  return (
    <BrowserRouter>
      <PublicLayout>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </PublicLayout>
    </BrowserRouter>
  );
};

export default App;
