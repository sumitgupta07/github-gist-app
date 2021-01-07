import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import GistDetails from '../GistDetails';
import fetchAllGists from '../../redux/actions/allGists';

const UserGists = () => {
  const allGists = useSelector((state) => state.allGists);
  const dispatch = useDispatch();
  const {username} = useParams();

  const {loading, error, gists, currentUser} = allGists;

  useEffect(() => {
    if (currentUser !== username) {
      dispatch(fetchAllGists(username));
    }
  }, [username, dispatch, currentUser]);

  if (loading === null) {
    return null;
  }
  if (loading === true) {
    return (
      <div className="alert alert-info" role="alert">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="list-group m-2">
      {gists.map((gist) => (
        <GistDetails gist={gist} key={gist.id} />
      ))}
    </div>
  );
};

export default UserGists;
