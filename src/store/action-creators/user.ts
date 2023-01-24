import axios from 'axios';
import { Dispatch } from 'redux';
import { UserActionType, UserAction } from '../../types/user';

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: UserActionType.FETCH_USERS });
      const response = await axios('https://jsonplaceholder.typicode.com/users');
      setTimeout(() => {
        dispatch({ type: UserActionType.FETCH_USERS_SUCCESS, peyload: response.data });
      }, 1000);
    } catch (e) {
      dispatch({ type: UserActionType.FETCH_USERS_ERROR, peyload: 'loading users error' });
    }
  };
};
