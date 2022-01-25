//Three possible states in the login page.

export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccessful = (user) => ({
  type: "LOGIN_SUCCESSFUL",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

// Logout instance
export const Logout = () => ({
  type: "LOGOUT",
});

//For Settings > Profile Picture
export const UpdatedStart = (userCredentials) => ({
  type: "UPDATE_START",
});

export const UpdateSuccessful = (user) => ({
  type: "UPDATE_SUCCESSFUL",
  payload: user,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
