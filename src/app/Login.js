import React, {useState, useEffect, useContext} from 'react';
import LoadingContext from './contexts/LoadingContext';
import { AuthConsumer } from './contexts/AuthContext';

const Login = () => {
  const [state, setState] = useState({username:'', password:''});
  const loading = useContext(LoadingContext);
  return (
    <div className="gc-login">
      <div className="gc-bg-login">
      </div>
      <div className="gc-login-wrapper">
        <div className="gc-login-header">
          <div className="gc-logo">
            <img src="https://s3.amazonaws.com/gc-general/gc-logo-default.svg" />
          </div>
        </div>
        <div className="gc-login-body">
          <AuthConsumer>
            {({ isAuth, login, logout }) => (
              <form className="gc-login-form">
                <div className="gc-avatar">
                </div>
                <div className="gc-form">
                  <label>{`Correo electrónico`}</label>
                  <div className={`gc-input`}>
                    <input name="username"
                      onChange={(e)=>{setState({...state, username: e.target.value})}}
                      type="text"
                      autoComplete="current-username" />
                  </div>
                </div>
                <div className="gc-form">
                  <label>Contraseña</label>
                  <div className={`gc-input`}>
                    <input name="password" 
                      onChange={(e)=>{setState({...state, password: e.target.value})}}
                      type="password" 
                      autoComplete="current-password" />
                  </div>
                </div>
                <div className="gc-button_ accent">
                  <button type="button" onClick={()=>{ loading.loading(true); login(state, ()=>{loading.loading(false)});}}>Ingresar</button>
                </div>
              </form>
            )}
          </AuthConsumer>
        </div>
      </div>
      <div className="gc-login-footer">
        <div className="gc-smspro-logo">
          <span>OMNI</span> 1.0
        </div>
        <p>
          Un servicio de <span>Gocloud</span>
        </p>
      </div>
    </div>
  );
};

export default Login;