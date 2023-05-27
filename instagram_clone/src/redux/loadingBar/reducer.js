import initialState from "./initialState";

const loadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "":
      break;

    default:
      return state;
  }
};

export default loadingReducer;
