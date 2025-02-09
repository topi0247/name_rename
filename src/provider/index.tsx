import { ReactNode } from "react";
import { BrowserRouter } from "react-router";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
