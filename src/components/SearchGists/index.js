import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const SearchGists = () => {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/gists/${username}`);
  };
  return (
    <nav className="navbar navbar-light bg-light justify-content-between position-sticky m-2">
      <p className="navbar-brand p-2 m-2">Gist List</p>
      <form className="input-group form-inline m-2 w-50" onSubmit={handleSubmit}>
        <input
          id="gist-username"
          className="form-control mr-sm-2"
          value={username}
          placeholder="Search by username..."
          onChange={handleChange}
        />
        <div className="input-group-btn">
          <button
            type="submit"
            className="btn btn-outline-success my-2 my-sm-0"
            disabled={username === ''}>
            Search
          </button>
        </div>
      </form>
    </nav>
  );
};

export default SearchGists;
