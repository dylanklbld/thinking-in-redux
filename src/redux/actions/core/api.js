export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

export function apiRequest({ params, method, url, timeout, feature }) {
  return {
    type: `${feature} ${API_REQUEST}`,
    payload: params,
    meta: { method, url, timeout, feature },
  };
}

export function apiSuccess({ response, feature }) {
  return {
    type: `${feature} ${API_SUCCESS}`,
    payload: response,
    meta: { feature },
  };
}
export function apiError({ error, feature }) {
  return {
    type: `${feature} ${API_ERROR}`,
    payload: error,
    meta: { feature },
  };
}
