import {createContext, useEffect, useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalApp, white, black } from '../styled-components/GlobalApp';

const ThemeCont = createContext();
const {Consumer, Provider} = ThemeCont;

const ThemeContext = ({children}) => {
  const [theme, setTheme] = useState(white);

  function changeTheme() {
    if (theme.name === 'white') {
      setTheme(black);
      localStorage.setItem('cck-program-theme', JSON.stringify(black));
    } else {
      setTheme(white);
      localStorage.setItem('cck-program-theme', JSON.stringify(white));
    }
  }
  
  useEffect(() => {
    let localTheme = localStorage.getItem('cck-program-theme');
    if (localTheme) {
      setTheme(JSON.parse(localTheme));
    } else {
      localStorage.setItem('cck-program-theme', JSON.stringify(white));
      setTheme(white);
    }
  }, []);

  return (
    <Provider value={{
      setTheme: changeTheme
    }}>
      <ThemeProvider theme={theme}>
        <GlobalApp />
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default ThemeContext;
export { ThemeCont, Consumer };