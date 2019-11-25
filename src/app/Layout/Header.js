import React from 'react';
import { AuthConsumer } from './../contexts/AuthContext';
import logo from './../public/assets/img/gc-logo-default.svg';

export default () => (
  <AuthConsumer>
    {({ isAuth, login, logout }) => (
      <div className="header">
        <object className="logo" type="image/svg+xml" data={logo} />
        <div onClick={logout} className="btnLogout">
          <span className="gc-font gc-font_logout"></span>
        </div>
      </div>
    )}
  </AuthConsumer>
);
