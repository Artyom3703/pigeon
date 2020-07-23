import * as ActionTypes from './ActionTypes';

export const Messages = (state = {
        errMess: null,
        messages: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_MESSAGES:
            return {...state, isLoading: false, errMess: null, messages: action.payload};

        case ActionTypes.MESSAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, messages: []};

        case ActionTypes.ADD_MESSAGE:
            var message = action.payload;
            return {...state, messages: state.messages.concat(message)};

        default:
            return state;
    }
}
