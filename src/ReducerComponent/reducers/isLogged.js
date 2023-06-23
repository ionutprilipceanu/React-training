const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_OUT":
      return !state;
    default:
      return state;
  }
};
export default loggedReducer;
