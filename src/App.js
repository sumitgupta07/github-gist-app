import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GistForks from './components/GistForks';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/forks/:gistId">
          <GistForks />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
