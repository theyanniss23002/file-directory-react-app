import * as types from './types';

export const loadContent = () => ({
    type: types.LOAD_CONTENT
});

export const loadingContent = (bool = false) => ({
    type: types.LOADING_CONTENT,
    payload: bool
});

export const loadedContent = (data) => ({
    type: types.LOADED_CONTENT,
    payload: data
});
