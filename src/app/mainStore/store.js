// 3rd party Libraries
import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import {
  createLogger
} from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const logger = createLogger({
  collapsed: true,
});

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

/**
 * @desc setup redux store
 * @returns {object} store
 */
const store = () => createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
    typeof window === 'object'
    // && (process.env.NODE_ENV === 'development')
    && (typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f)
  )
);

export default store;
