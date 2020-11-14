import { SET_LOADER } from "../../actions/core/ui";

const initialState = {
  loading: false,
};

const uiReducer = (uiState = initialState, action) => {
  switch (true) {
    case action.type.includes(SET_LOADER): {
      return {
        ...uiState,
        loading: action.payload,
      };
    }
    default:
      return uiState;
  }
};

export default uiReducer;
