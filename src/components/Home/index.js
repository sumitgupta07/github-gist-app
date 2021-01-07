import {Route, Switch} from 'react-router-dom';
import UserGists from '../UserGists';
import SearchGists from '../SearchGists';

const Home = () => {
  return (
    <div className="container">
      <SearchGists />
      <Switch>
        <Route path="/gists/:username">
          <UserGists />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
