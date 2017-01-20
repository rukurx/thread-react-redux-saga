import { call, put, fork, takeEvery } from 'redux-saga/effects';
import * as API from '../api';
import * as actions from '../actions';

// コメント追加
function* runRequestAddComment(action) {
    const { result, err } = yield call(API.addComment, action.title, action.body);
    if (result && result.status === 200 && !err) {
        yield put(actions.addComment(result.data.title, result.data.body));
    } else {
        // yield put();
    }
}

function* handleRequestAddComment() {
    yield takeEvery('REQUEST_ADD_COMMENT', runRequestAddComment);
}

// いいねをさらに取得
function* runRequestGetMoreLikes(action) {
    const { result, err } = yield call(API.likes);
    yield put(actions.showLoading());
    if (result && result.status === 200 && !err) {
        yield put(actions.successGetMoreLikes(result.data.likes));
    } else {
        // yield put();
    }
    yield put(actions.hideLoading());
}

function* handleRequestGetMoreLikes() {
    yield takeEvery('GET_MORE_LIKES', runRequestGetMoreLikes);
}

export default function* rootSaga() {
  yield fork(handleRequestAddComment);
  yield fork(handleRequestGetMoreLikes);
}
