import { all, put, call, takeLatest } from 'redux-saga/effects';
import api from './api.methods';
import * as types from './types';
import * as action from './actions';

//LIST
function* loadContentSaga() {
    yield put(action.loadingContent(true));
    const response = yield call(api.getContent);
    if (response) {
        yield put(action.loadedContent(response));
    }
    yield put(action.loadingContent(false));
}

//INCLUDED
function* loadIncludedContentSaga({ payload }) {
    yield put(action.loadingIncludedContent(true));
    const response = yield call(api.getIncludedContent, payload);
    if (response) {
        yield put(action.loadedIncludedContent(response));
    }
    yield put(action.loadingIncludedContent(false));
}

export default function* saga() {
    yield all([
        takeLatest(types.LOAD_CONTENT, loadContentSaga),
        takeLatest(types.LOAD_INCLUDED_CONTENT, loadIncludedContentSaga)
    ]);
}
