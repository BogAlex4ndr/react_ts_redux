import axios from 'axios';
import { Dispatch } from 'redux';
import { TodoAction, TodoActionsTypes } from '../../types/todo';

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: TodoActionsTypes.FETCH_TODO });
      const response = await axios('https://jsonplaceholder.typicode.com/todos', {
        params: { _page: page, _limit: limit },
      });
      setTimeout(() => {
        dispatch({ type: TodoActionsTypes.FETCH_TODO_SUCCESS, peyload: response.data });
      }, 100);
    } catch (e) {
      dispatch({
        type: TodoActionsTypes.FETCH_TODO_ERROR,
        peyload: 'error, cannot load todo list',
      });
    }
  };
};

export function SetTodoPage(page: number): TodoAction {
  return { type: TodoActionsTypes.SET_TODO_PAGE, payload: page };
}
