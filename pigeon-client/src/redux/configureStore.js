import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createForms } from 'react-redux-form';
import { Messages } from './messages';
import { Auth } from './auth';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            messages: Messages,
            auth: Auth,
            ...createForms({
                messageForm: {message: ''}
            })
        }),
        applyMiddleware(thunk)
    );

    return store;
}
