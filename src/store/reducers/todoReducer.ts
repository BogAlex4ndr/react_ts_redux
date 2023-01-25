import { TodoAction, TodoActionsTypes, TodoState } from '../../types/todo';

const initialState: TodoState = {
  todos: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false,
};

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionsTypes.FETCH_TODO:
      return { ...state, loading: true };

    case TodoActionsTypes.FETCH_TODO_SUCCESS:
      return { ...state, loading: false, todos: action.peyload };

    case TodoActionsTypes.FETCH_TODO_ERROR:
      return { ...state, loading: false, error: action.peyload };

    case TodoActionsTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload };

    default:
      return state;
  }
};
