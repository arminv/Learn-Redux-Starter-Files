import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Root reducer:
import rootReducer from './reducers/index';


import comments from './data/comments';
import posts from './data/posts';

// Default data (for now):
const defaultState = {
    posts,
    comments
};

export default store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);


