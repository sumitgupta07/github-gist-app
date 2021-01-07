import {GIST_FORKS_LOADING, GIST_FORKS_ERROR, GIST_FORKS_SUCCESS} from '../types';

const initialState = {
  loading: true,
  error: null,
  forks: [],
};

const gistForksReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case GIST_FORKS_LOADING:
      return {...state, loading: true, error: null, forks: []};
    case GIST_FORKS_ERROR:
      return {...state, loading: false, error: payload, forks: []};
    case GIST_FORKS_SUCCESS:
      return {...state, loading: false, error: null, forks: payload};
    default:
      return state;
  }
};

export default gistForksReducer;
