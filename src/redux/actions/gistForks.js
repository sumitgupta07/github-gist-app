import api from '../../api';
import {GIST_FORKS_LOADING, GIST_FORKS_ERROR, GIST_FORKS_SUCCESS} from '../types';

const gistForksLoading = () => {
  return {type: GIST_FORKS_LOADING};
};
const gistForksSuccess = (gists) => {
  return {type: GIST_FORKS_SUCCESS, payload: gists};
};
const gistForksError = (error) => {
  return {type: GIST_FORKS_ERROR, payload: error};
};

const fetchGistForks = (gistId) => async (dispatch) => {
  dispatch(gistForksLoading());
  try {
    const {data} = await api.get(`/gists/${gistId}/forks`);
    if (data.length === 0) {
      dispatch(gistForksError('No forks found!!!'));
    } else {
      dispatch(gistForksSuccess(data.slice(0, 3)));
    }
  } catch (error) {
    dispatch(gistForksError('Error in fetching gist')); // We can use error message from API as well
  }
};

export default fetchGistForks;
