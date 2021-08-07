import * as types from './types';

const initialState = {
    loading_content: false,
    content: {},
    loading_included: false,
    included_content: {}
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
        case types.LOADING_INCLUDED_CONTENT:
            return {
                ...state,
                loading_included: payload
            };
        case types.LOADED_INCLUDED_CONTENT:
            return {
                ...state,
                included_content: {
                    ...state.included_content,
                    [payload?.id]: payload
                }
            };
        default:
            return state;
    }
}
