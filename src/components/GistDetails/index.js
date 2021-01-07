import {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './GistDetails.css';

const GistDetails = ({gist}) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    let tags = new Set();
    for (const key of Object.keys(gist.files)) {
      tags.add(gist.files[key].language);
    }
    setTags(Array.from(tags));
  }, [gist]);

  return (
    <div className="card mb-1">
      <h4 className="card-header card-title text-success">{`${
        gist.description || 'No Description'
      }`}</h4>
      <div className="d-flex justify-content-between align-items-start mx-3 my-2">
        <div>
          <div>
            <label>Author:</label>
            <span>{gist.owner.login}</span>
          </div>
          <div className="my-2">
            <Link to={`/forks/${gist.id}`}>Forks</Link>
            <br />
            <a href={gist.html_url} target="_blank" rel="noreferrer">
              Gist Link
            </a>
          </div>
        </div>
        <div>
          <label>Created:</label>
          <span>
            {new Intl.DateTimeFormat('en-GB', {dateStyle: 'medium', timeStyle: 'long'}).format(
              new Date(gist.created_at)
            )}
          </span>
        </div>
      </div>

      <div className="mx-3">File Tags</div>

      <div className="d-flex mx-3 mb-2">
        {tags.map((tag) => {
          return (
            <span key={tag} className="badge bg-info m-1">
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

GistDetails.protoTypes = {
  gist: propTypes.object.isRequired,
};

export default GistDetails;
