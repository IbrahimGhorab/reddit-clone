export const themeReducer = (state = false, action) => {
  switch (action.type) {
    case "DARK":
      return (state = action.payload);
    case "LIGHT":
      return (state = action.payload);
    default:
      return state;
  }
};
