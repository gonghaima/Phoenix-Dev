export const userInitialState = {
  user: {
    loggedIn: false,
    username: "",
    password: ""
  }
};

export const userActions = {
  login: (state, payload) => {
    return { user: { ...state.user, loggedIn: true } };
  },
  logout: (state, payload) => {
    return { user: { ...state.user, loggedIn: false } };
  },
  updateUsername: (state, payload) => {
    return {
      ...state,
      user: {
        ...state.user,
        ...payload
      }
    };
  },
  updatePassword: (state, payload) => {
    return {
      ...state,
      user: {
        ...state.user,
        ...payload
      }
    };
  }
};
