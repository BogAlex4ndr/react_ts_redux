export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionsTypes {
  FETCH_TODO = 'FETCH_TODO',
  FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
  FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface fetchTodoAction {
  type: TodoActionsTypes.FETCH_TODO;
}
interface fetchTodoSuccessAction {
  type: TodoActionsTypes.FETCH_TODO_SUCCESS;
  peyload: any[];
}
interface fetchTodoErrorAction {
  type: TodoActionsTypes.FETCH_TODO_ERROR;
  peyload: string;
}
interface SetTodoPage {
  type: TodoActionsTypes.SET_TODO_PAGE;
  payload: number;
}

export type TodoAction =
  | fetchTodoAction
  | fetchTodoSuccessAction
  | fetchTodoErrorAction
  | SetTodoPage;
