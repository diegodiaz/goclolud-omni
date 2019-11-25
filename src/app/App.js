import React from 'React';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AuthRouter from './AuthRouter';
import Login from './Login';

const Detail = () => (<div>Detail</div>);

export default () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <AuthRouter path="/" component={Detail} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};
