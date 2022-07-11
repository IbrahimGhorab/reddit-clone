export const postReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_POSTS":
      return action.payload;
      
    case "ADD_POST":
      return [...state, action.payload];

    default:
      return state;
  }
};
