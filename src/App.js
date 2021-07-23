
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from './styled-components/Home';
import ThemeContext from './context/ThemeContext';

function App() {
  return (
    <ThemeContext>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Router>
    </ThemeContext>
  );
}

export default App;
