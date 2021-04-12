// import { RootAction, RootState, Services } from 'MyTypes';
import { createStore } from 'redux';

import { composeEnhancers } from './utils';
import rootReducer from './root-reducer';

// browser history
// export const history = createBrowserHistory();

// export const epicMiddleware = createEpicMiddleware<
//     RootAction,
//     RootAction,
//     RootState,
//     Services
// >({
//     dependencies: services,
// });

// // configure middlewares
// const middlewares = [epicMiddleware];
// // compose enhancers
// const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// rehydrate state on app start
const initialState = {};

// create store
const store = createStore(rootReducer(), initialState, composeEnhancers());

// export store singleton instance
export default store;
