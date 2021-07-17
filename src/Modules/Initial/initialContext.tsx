import { useContext } from 'react';
import { createContext } from 'react';

export interface ICategoryContext {
    productName: string;
    categoryName: string;
}

export const InitialContext = createContext<ICategoryContext>({productName: "", categoryName: ""});

export function useInitialContext() {
  return useContext(InitialContext);
};
