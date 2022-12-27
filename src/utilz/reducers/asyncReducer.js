export const asyncReducer = (state, action) => {
  if (typeof action === "function") {
    action = action(state);
  }
  return { ...state, ...action };
};
