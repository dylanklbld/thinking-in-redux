import { API_REQUEST, apiError, apiSuccess } from "../actions/core/api";

import axios from "axios";

const apiMiddleware = ({ dispatch }) => (next) => async (action) => {
  next(action);
  if (action.type.includes(API_REQUEST)) {
    const { url, method, feature } = action.meta;
    try {
      const { data } = await axios(url, { method });
      dispatch(apiSuccess({ response: data, feature }));
    } catch (error) {
      dispatch(apiError({ error, feature }));
    }
  }
};

export default apiMiddleware;
