import { applyMiddleware, compose, createStore } from "redux";
import rootReducer, { initialState } from "./reducers/rootReducer";

import actionSplitterMiddleware from "./middlewares/actionSplitter";
import apiMiddleware from "./middlewares/api";
import booksMiddleware from "./middlewares/books";
import logger from "redux-logger";
import normalizationMiddleware from "./middlewares/normalization";
import notificationMiddleware from "./middlewares/ui";
import thunkMiddleware from "redux-thunk";

//createthefeaturemiddlewarearray
const featureMiddleware = [booksMiddleware];

//createthecoremiddlewarearray
const coreMiddleware = [
  actionSplitterMiddleware,
  apiMiddleware,
  normalizationMiddleware,
  notificationMiddleware,
];

const middlewares = [
  thunkMiddleware,
  ...featureMiddleware,
  ...coreMiddleware,
  logger,
];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

const store = createStore(rootReducer, initialState, enhancer);

export default store;
