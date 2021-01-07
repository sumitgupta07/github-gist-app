import {ALL_GISTS_LOADING, ALL_GISTS_ERROR, ALL_GISTS_SUCCESS} from '../types';

const initialState = {
  loading: null,
  error: null,
  gists: [],
  currentUser: '',
};

const allGistsReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ALL_GISTS_LOADING:
      return {...state, error: null, loading: true, gists: []};

    case ALL_GISTS_ERROR:
      return {...state, error: payload, loading: false, gists: []};
    case ALL_GISTS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        gists: payload.data,
        currentUser: payload.username,
      };

    default:
      return state;
  }
};

export default allGistsReducer;
