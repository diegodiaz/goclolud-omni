import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

function HomeButton() {
  

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

const AuthContext = React.createContext()

const AuthProvider = ({children}) => {
  let history = useHistory();
  const [isAuth, setAuth] = useState(false);
  const [authTokens, setAuthTokens] = useState('');
  const login = async (state) => {
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
        }else{
          logout();
        }
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
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
