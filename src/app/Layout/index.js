import React from 'react';
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import Header from './Header';
import Session from './Session';
import Title from './Title';

export default ({children}) => (
  <div>
    <Header/>
    <Session />
    <div className="realbody">
      <Title title={"Detalle de campaña"} />
      {children}
    </div>
  </div>
);
