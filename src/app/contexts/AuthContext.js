import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  let history = useHistory();
  const [isAuth, setAuth] = useState(false);
  const [authTokens, setAuthTokens] = useState('');
  const login = async (state, next) => {
    try {
      const url = "/api/user/login";
      const method = "POST";
      const {username, password} = state;
      const bodyParams = {username, password};
      const response = await fetch(url, {
        method,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: bodyParams ? JSON.stringify(bodyParams) : undefined
      }).then((response)=>{
        return response.json()
      }).then((res)=>{
        if (res.success){
          setAuth(true);
          setTokens(res.token);
          history.push("/");
          next();
        }else{
          logout();
        }
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      });
    } catch (err) {
      console.log(err);
    }
    next();
  };

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  const logout = () => {
    setAuth(false);
    setTokens('');
    history.push("/login");
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        authTokens,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
