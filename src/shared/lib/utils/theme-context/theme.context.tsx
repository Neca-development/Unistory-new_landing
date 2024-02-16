import { createContext, useContext } from "react";

export interface IThemeContext {
  textClassName: {
    [className: string]: boolean;
  };
}

export const ThemeContext = createContext<IThemeContext>({
  textClassName: {
    "dark:text-primary-s": true,
    "text-primary-s": true,
    "text-light-text-primary": false,
  },
});

export const ThemeContextProvider = ({ children }: any) => {
  return (
    <ThemeContext.Provider
      value={{
        textClassName: {
          "dark:text-primary-s": true,
          "text-primary-s": false,
          "text-light-text-primary": false,
          "duration-300": true,
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
