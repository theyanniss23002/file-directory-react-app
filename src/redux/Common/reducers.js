import * as types from './types';

const initialState = {
    loading_content: false,
    content: []
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case types.LOADING_CONTENT:
            return {
                ...state,
                loading_content: payload
            };
        case types.LOADED_CONTENT:
            return {
                ...state,
                content: payload
            };
        default:
            return state;
    }
}
