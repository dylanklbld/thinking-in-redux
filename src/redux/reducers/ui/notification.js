import { SET_NOTIFICATION } from "../../actions/core/ui";

const initialState = [];

const notificationReducer = (notificationsState = initialState, action) => {
  switch (true) {
    case action.type.includes(SET_NOTIFICATION): {
      return [...notificationsState, action.payload];
    }
    default:
      return notificationsState;
  }
};

export default notificationReducer;
