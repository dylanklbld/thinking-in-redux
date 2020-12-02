import { dataNormalized } from "../actions/core/normalization";

const normalizationMiddleware = ({ dispatch }) => (next) => (action) => {
  if (action.type.includes("SET") && action.meta.normalizeKey) {
    // just an event action
    dispatch(dataNormalized({ feature: action.meta.feature }));

    const books = action.payload.reduce((acc, item) => {
      acc[item[action.meta.normalizeKey]] = item;
      return acc;
    }, {});

    // fire the books document action
    next({ ...action, payload: books, normalizeKey: null });
  } else {
    next(action);
  }
};

export default normalizationMiddleware;
