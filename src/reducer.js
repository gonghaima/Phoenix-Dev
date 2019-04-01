
const reducer = (state, action) => {
  switch (action.type) {
    case "addFruit":
      return !state.fruits.includes(action.payload) && state.fruits
        ? { fruits: [...state.fruits, action.payload] }
        : state;
    case "deleteFruit":
      return {
        fruits: state.fruits.filter((fruit, idx) => idx !== action.payload)
      };
    default:
      throw new Error(`Action type must be defined`);
  }
};

export default reducer;
