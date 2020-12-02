// authUser actions
export const SET_AUTH_USER = "SET_AUTH_USER";

// setAuthUser action creator
export const setAuthUser = (id) => {
  return {
    type: SET_AUTH_USER,
    id,
  };
};
