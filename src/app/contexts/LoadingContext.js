import { createContext, useContext } from 'react';

export const LoadingContext = createContext();

export function isLoading() {
  return useContext(LoadingContext);
}
