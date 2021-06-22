import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Signup, Login, Blog, News } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact="/news">
          <News />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
