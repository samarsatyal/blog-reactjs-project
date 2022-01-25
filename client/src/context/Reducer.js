const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case "LOGIN_SUCCESSFUL":
      return {
        user: action.payload, // from Actions.js
        isFetching: false,
        error: false,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };

    case "UPDATE_START":
      return {
        ...state,
        isFetching: true,
      };

    case "UPDATE_SUCCESSFUL":
      return {
        user: action.payload, // from Actions.js
        isFetching: false,
        error: false,
      };

    case "UPDATE_FAILURE":
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };

    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
