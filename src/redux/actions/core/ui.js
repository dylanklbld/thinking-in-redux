export const SET_LOADER = "SET_LOADER";
export const SET_NOTIFICATION = "SET_NOTIFICATION";

export const setLoader = ({ state, feature }) => ({
  type: `${feature} ${SET_LOADER}`,
  payload: state,
  meta: { feature },
});

export const setNotification = ({ message, feature }) => ({
  type: `${feature} ${SET_NOTIFICATION}`,
  payload: message,
  meta: { feature },
});
