import React, {useState} from 'React';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Loading from './Loading';
import AuthRouter from './AuthRouter';
import Login from './Login';
import Layout from './Layout';
import Details from './Details';

const Detail = () => (<Layout><Details></Details></Layout>);

export default () => {
  return (
    <Router>
      <AuthProvider>
        <Loading />
        <Switch>
          <Route path="/login" component={Login} />
          <AuthRouter path="/" component={Detail} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};
