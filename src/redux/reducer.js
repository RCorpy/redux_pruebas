const initialState = {
  visibility: "IT IS VISIBLE AS FUK BOYYYYY"
};
  
  function reducer(state = initialState, action) {
    console.log('reducer. action:', action);
  
    switch (action.type) {
      case 'ACTION_1':
        return {
          ...state
        };
      case 'ACTION_2':
        return {
          ...state
        };
      default:
        return state;
    }
  }
  
  export default reducer;