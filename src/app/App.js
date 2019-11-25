import React, {useState} from 'React';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext';
import AuthRouter from './AuthRouter';
import Login from './Login';
import Layout from './Layout';
import Details from './Details';
import {LoadingProvider} from './contexts/LoadingContext';
import Loading from './Loading';

const Detail = () => (<Layout><Details></Details></Layout>);

export default () => {
  return (
    <Router>
      <AuthProvider>
        <LoadingProvider>
          <Loading />
          <Switch>
            <Route path="/login" component={Login} />
            <AuthRouter path="/" component={Detail} />
          </Switch>
        </LoadingProvider>
      </AuthProvider>
    </Router>
  );
};
