import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';
import App from './components/App';

const initialState = {
    thread: {
        id: 1,
        title: 'これはThreadのタイトル1です',
        body: 'これはThreadの本文1です',
        isEdit: false,
        titleLength: 17,
        bodyLength: 15
    },
    comments: [
        {
            id: 1,
            title: 'これはCommentのタイトル1です',
            body: 'これはCommentの本文1です',
            isEdit: false,
        },
        {
            id: 2,
            title: 'これはCommentのタイトル2です',
            body: 'これはCommentの本文2です',
            isEdit: false,
        }
    ],
    likes: [
        {
            id: 1,
            user_name: '太郎',
        },
        {
            id: 2,
            user_name: '花子',
        }
    ],
    loading: {
        isActive: false
    }
};

const logger = createLogger();
const store = createStore(reducer, initialState, applyMiddleware(thunk, logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
