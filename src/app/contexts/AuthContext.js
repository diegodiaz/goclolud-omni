import React, {useState} from 'react'

const AuthContext = React.createContext()

const AuthProvider = ({children}) => {
  const [isAuth, setAuth] = useState(false);
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
      }).then((res)=>{
        res.json()
      }).then((res)=>{
        setAuth(true);
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    setAuth(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
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
