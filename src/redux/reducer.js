import ActionTypes from "./actionTypes";

const initialState = {
    isLoaded: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.DOM_LOADED_SUCCESS:
            return {
                ...state,
                isLoaded: true,
            };

        default:
            return state;
    }
};

export default reducer;
