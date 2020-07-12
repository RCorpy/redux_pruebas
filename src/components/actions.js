export const deleteTodoAction = (dispatch, id) =>
  dispatch({
    type: 'ACTION_1',
    payload: id,
  });

export const toggleCompleteAction = (dispatch) => (id) =>
  dispatch({
    type: 'TOGGLE_COMPLETED_TODO',
    payload: id,
  });