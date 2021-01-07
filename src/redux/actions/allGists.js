import api from '../../api';
import {ALL_GISTS_LOADING, ALL_GISTS_ERROR, ALL_GISTS_SUCCESS} from '../types';

const allGistsLoading = () => {
  return {type: ALL_GISTS_LOADING};
};
const allGistsSuccess = ({data, username}) => {
  return {type: ALL_GISTS_SUCCESS, payload: {data, username}};
};
const allGistsError = (error) => {
  return {type: ALL_GISTS_ERROR, payload: error};
};

const fetchAllGists = (username) => async (dispatch) => {
  dispatch(allGistsLoading());
  try {
    const {data} = await api.get(`/users/${username}/gists`);
    dispatch(allGistsSuccess({data, username}));
  } catch (error) {
    dispatch(allGistsError('Error in fetching gist')); // We can use error string from API from "error" object
  }
};

export default fetchAllGists;
