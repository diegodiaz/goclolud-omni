import React, { createContext, useState } from 'react';

const LoadingContext = createContext();

const LoadingProvider = ({children}) => {
  const [isLoading, setLoading] = useState(false);
  const loading = (value) => {
    setLoading(value);
  };
  return (
    <LoadingContext.Provider
      value={{
        loading,
        isLoading
      }}
      >
      {children}
    </LoadingContext.Provider>
  );
}

const LoadingConsumer = LoadingContext.Consumer

export { LoadingProvider, LoadingConsumer }

export default LoadingContext;