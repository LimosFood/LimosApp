import React, {createContext, ReactNode} from 'react';

interface ITheme {}

interface IThemeHook {
  chidren?: ReactNode;
  theme: ITheme;
}

const ThemeContext = createContext({
  theme: {},
});

const ThemeProvider = ({children, theme = {}}: IThemeHook) => {
  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};

export default function useTheme(): ITheme {}
