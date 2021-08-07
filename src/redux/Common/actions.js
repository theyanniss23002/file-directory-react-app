import * as types from './types';

//LIST
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

//INCLUDED
export const loadIncludedContent = (id) => ({
    type: types.LOAD_INCLUDED_CONTENT,
    payload: id
});

export const loadingIncludedContent = (bool = false) => ({
    type: types.LOADING_INCLUDED_CONTENT,
    payload: bool
});

export const loadedIncludedContent = (data) => ({
    type: types.LOADED_INCLUDED_CONTENT,
    payload: data
});
