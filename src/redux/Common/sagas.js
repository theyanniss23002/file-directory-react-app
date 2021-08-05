import { all, put, call, takeLatest } from 'redux-saga/effects';
import api from './api.methods';
import * as types from './types';
import { loadedContent, loadingContent } from './actions';

function* loadContentSaga() {
    yield put(loadingContent(true));
    const response = yield call(api.getContent);
    if (response) {
        loadedContent(response);
    }
    yield put(loadingContent(false));
}

export default function* saga() {
    yield all([takeLatest(types.LOAD_CONTENT, loadContentSaga)]);
}
