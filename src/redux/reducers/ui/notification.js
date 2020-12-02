import { REMOVE_NOTIFICATION, SET_NOTIFICATION } from "../../actions/core/ui";

const initialState = [];

const notificationReducer = (notificationsState = initialState, action) => {
  switch (true) {
    case action.type.includes(SET_NOTIFICATION): {
      return [...notificationsState, action.payload];
    }
    case action.type.includes(REMOVE_NOTIFICATION): {
      return notificationsState.filter(({ id }) => id !== action.payload);
    }
    default:
      return notificationsState;
  }
};

export default notificationReducer;
