import React from 'React';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const Login = () => (<div>Login</div>);
const Detail = () => (<div>Detail</div>);

export default () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Detail />
      </Route>
    </Switch>
  </Router>
);
