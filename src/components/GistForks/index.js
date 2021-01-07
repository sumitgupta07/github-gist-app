import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import fetchGistForks from '../../redux/actions/gistForks';

const GistForks = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {gistId} = useParams();
  const gistForks = useSelector((state) => state.gistForks);

  const {loading, error, forks} = gistForks;

  useEffect(() => {
    dispatch(fetchGistForks(gistId));
  }, [gistId, dispatch]);

  if (loading) {
    return (
      <div className="alert alert-info m-2" role="alert">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="alert alert-danger m-2" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-outline-secondary m-2"
        onClick={() => history.goBack()}>
        Back
      </button>
      <div className="card mb-2 mt-2">
        <h2 className="card-header card-title text-success">
          Forks list for [{forks[0].description || 'No Description'}]
        </h2>
        {/* <h3 className='lead text-info m-2'>Forks List</h3> */}
        {forks.map((fork) => (
          <div key={fork.id} className="list-group-item">
            {fork.owner && (
              <a href={`https://gist.github.com/${fork.id}`} target="_blank" rel="noreferrer">
                <img
                  key="image"
                  src={fork.owner.avatar_url}
                  alt={fork.owner.login}
                  className="rounded-circle m-3 w-25"
                  style={{maxWidth: '40px', maxHeight: '40px'}}
                />
                <span>{fork.owner.login}</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GistForks;
